class CreateChanges < ActiveRecord::Migration
  def change
    create_table :changes do |t|
      t.references :ticket, index: true, foreign_key: true
      t.references :line, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
