class ChangeLongIdToFloat < ActiveRecord::Migration
  def change
    change_column :items, :item_id,  :float
  end
end
