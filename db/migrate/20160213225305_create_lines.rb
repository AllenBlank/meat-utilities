class CreateLines < ActiveRecord::Migration
  def change
    create_table :lines do |t|
      t.string :description
      t.string :uom
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
