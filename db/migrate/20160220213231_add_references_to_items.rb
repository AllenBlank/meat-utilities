class AddReferencesToItems < ActiveRecord::Migration
  def change
    add_reference :items, :line, index: true, foreign_key: true
    add_reference :warnings, :item, index: true, foreign_key: true
  end
end
