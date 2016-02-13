class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :order_id
      t.string :order_num
      t.date :date_needed
      t.string :invoice_num
      t.string :invoice_date
      t.string :status_code
      t.string :customer_code
      t.float :total
      t.string :route_code
      t.date :order_date

      t.timestamps null: false
    end
  end
end
