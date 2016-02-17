class AddReferencesForList < ActiveRecord::Migration
  def change
    add_reference :tickets, :list, index: true, foreign_key: true
    add_reference :changes, :list, index: true, foreign_key: true
  end
end
