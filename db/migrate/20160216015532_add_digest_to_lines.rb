class AddDigestToLines < ActiveRecord::Migration
  def change
    add_column :lines, :digest, :string
  end
end
