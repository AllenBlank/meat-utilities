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
    
    def tickets_on date
      List.first.tickets
        .where( date_needed: date )
        .where.not( status_code: "I" )
        .where.not( status_code: "R" )
        .order( :customer_code )
    end
    
    def todays_tickets
      tickets_on Time.zone.today
    end
    
    def tomorrows_tickets
      tickets_on Time.zone.tomorrow
    end
    
end
