class AddFieldsToStatus < ActiveRecord::Migration
  def change
    add_column :statuses, :description, :string
    add_column :statuses, :uom, :string
    add_column :statuses, :item_code, :integer
    add_column :statuses, :bn_stock, :integer
    add_column :statuses, :bn_avail, :integer
    add_column :statuses, :ds_stock, :integer
    add_column :statuses, :ds_avail, :integer
  end
end