class Line < ActiveRecord::Base
  belongs_to :ticket
  has_many :line_changes, foreign_key: "line_id", class_name: "Change", dependent: :destroy
  
  def self.build_lines order_id
    json = Fc.get_lines order_id
    lines = []
    json.each do |j|
        line = Line.new
        line.description = j["itemDescrip"]
        line.uom = j["orderUomName"]
        line.quantity = j["qtyOrdered"]
        line.line_id = j["ordlineId"]
        line.save
        lines << line
    end
    lines
  end
  
end