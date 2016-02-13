class AddTicketIdToLines < ActiveRecord::Migration
  def change
    add_reference :lines, :ticket, index: true, foreign_key: true
  end
end
