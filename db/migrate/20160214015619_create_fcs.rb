class CreateFcs < ActiveRecord::Migration
  def change
    create_table :fcs do |t|

      t.timestamps null: false
    end
  end
end
