class List < ActiveRecord::Base
  has_many :tickets, dependent: :destroy
  has_many :list_changes, foreign_key: "line_id", class_name: "Change", dependent: :destroy
end
