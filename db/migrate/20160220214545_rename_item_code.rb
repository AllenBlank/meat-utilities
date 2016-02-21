class RenameItemCode < ActiveRecord::Migration
  def change
    rename_column :items, :item_code, :item_id
  end
end
