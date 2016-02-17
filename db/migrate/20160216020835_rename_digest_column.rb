class RenameDigestColumn < ActiveRecord::Migration
  def change
    rename_column :lines, :digest, :line_id
  end
end
