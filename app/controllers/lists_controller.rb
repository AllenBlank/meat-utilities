class ListsController < ApplicationController
  
  before_action :set_list, only: [:all, :today_and_tomorrow, :today_and_tomorrow_lines, :today]
  
  def all
    @tickets = @list.tickets.order :date_needed, :customer_code
    render "index"
  end
  
  def today_and_tomorrow
    @tickets = todays_tickets + tomorrows_tickets
    render "index"
  end
  
  def today_and_tomorrow_lines
    @tickets = todays_tickets + tomorrows_tickets
    @lines = Line.where( ticket: @tickets ).order :description
    frozen, fresh = [], []
    @lines.each do |line|
      line.item.is_frozen? ? frozen << line : fresh << line
    end
    @lines = fresh + frozen
    render "just-lines"
  end
  
  def today
    @tickets = todays_tickets
    render "index"
  end
  
  def refresh
    @list = List.create
    redirect_to :back
  end
  
  private
  
    def set_list
      @list = List.first
    end
    
    def todays_tickets
      List.first.tickets.where( date_needed: Time.zone.today ).where.not( status_code: "I" ).order :date_needed, :customer_code
    end
    
    def tomorrows_tickets
      List.first.tickets.where( date_needed: Time.zone.tomorrow ).where.not( status_code: "I" ).order :date_needed, :customer_code
    end
    
end
