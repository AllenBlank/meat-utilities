class ListsController < ApplicationController
  
  before_action :set_list, only: [:all, :today_and_tomorrow, :today]
  
  def all
    @tickets = @list.tickets
    render "index"
  end
  
  def today_and_tomorrow
    tomorrow = @list.tickets.where date_needed: Time.zone.tomorrow
    today_not_invoiced = @list.tickets.where( date_needed: Time.zone.today ).where.not( status_code: "I" )
    @tickets = today_not_invoiced + tomorrow
    render "index"
  end
  
  def today
    @tickets = @list.tickets.where( date_needed: Time.zone.today ).where.not( status_code: "I" )
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
