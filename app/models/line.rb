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
  
  def find_changes old_line
    ["description", "uom", "quantity"].each do |attribute|
        unless old_line[attribute] == self[attribute]
            change = Change.create description: (attribute.capitalize + " changed from '" + old_line[attribute].to_s + "' to '" + self[attribute].to_s + ".'")
            self.line_changes << change
        end
    end
    old_line.changes.each {|change| change.update line_id: self.id }
  end
  
end