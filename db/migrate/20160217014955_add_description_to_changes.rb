class AddDescriptionToChanges < ActiveRecord::Migration
  def change
    add_column :changes, :description, :string
  end
end
