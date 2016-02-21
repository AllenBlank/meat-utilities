class RenameStatusToItem < ActiveRecord::Migration
  def change
    rename_table :statuses, :items
  end
end
