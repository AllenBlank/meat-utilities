class RenameChangesToWarnings < ActiveRecord::Migration
  def change
    rename_table :changes, :warnings
  end
end
