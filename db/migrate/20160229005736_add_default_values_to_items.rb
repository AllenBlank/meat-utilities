class AddDefaultValuesToItems < ActiveRecord::Migration
  def change
    change_column :items, :bn_stock, :integer, :default => 0
    change_column :items, :bn_avail, :integer, :default => 0
    change_column :items, :ds_stock, :integer, :default => 0
    change_column :items, :ds_avail, :integer, :default => 0
  end
end
