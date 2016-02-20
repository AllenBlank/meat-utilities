class Warning < ActiveRecord::Base
  belongs_to :list
  belongs_to :ticket
  belongs_to :line
end
