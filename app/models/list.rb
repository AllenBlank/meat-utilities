class List < ActiveRecord::Base
  has_many :tickets, dependent: :destroy
  has_many :lines, through: :tickets
  has_many :list_changes, foreign_key: "list_id", class_name: "Change", dependent: :destroy
  after_create :add_tickets, :update_tickets
  
  def add_tickets
    self.tickets << Ticket.build_tickets
  end
  
  def update_tickets
    old_tickets = List.first.tickets.map {|ticket| ticket.order_id}
    new_tickets = self.tickets.map {|ticket| ticket.order_id}
    
    created_tickets = new_tickets - old_tickets
    add_change_by_order_id_array created_tickets, "created"
    
    deleted_tickets = old_tickets - new_tickets
    add_change_by_order_id_array deleted_tickets, "deleted"
    
    persist_tickets = new_tickets - created_tickets
    persist_tickets.each do |order_id|
      old_ticket = List.first.tickets.find_by_order_id order_id
      new_ticket = self.tickets.find_by_order_id order_id
      new_ticket.find_changes old_ticket
    end
    List.first.list_changes.each {|change| change.update list_id: self.id }
    List.first.destroy unless List.first.id == self.id
  end
  
  def add_change_by_order_id_array array, type_of_change
    array.each do |order_id|
      ticket = Ticket.find_by_order_id order_id
      description = (
        "Order for: " + ticket.customer_code +
        " needed on " + ticket.date_needed.to_s +
        " was " + type_of_change + "."
      )
      self.list_changes << Change.create(description: description)
    end
  end
  
end
