class ListsController < ApplicationController
  
  before_action :set_list, only: [:all, :today_and_tomorrow, :today]
  
  def all
    @tickets = @list.tickets.order :date_needed, :customer_code
    render "index"
  end
  
  def today_and_tomorrow
    tomorrow = @list.tickets.where( date_needed: Time.zone.tomorrow ).where.not( status_code: "I" ).order :date_needed, :customer_code
    today = @list.tickets.where( date_needed: Time.zone.today ).where.not( status_code: "I" ).order :date_needed, :customer_code
    @tickets = today + tomorrow
    render "index"
  end
  
  def today
    @tickets = @list.tickets.where( date_needed: Time.zone.today ).where.not( status_code: "I" ).order :date_needed, :customer_code
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
    
end
