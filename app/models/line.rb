class Line < ActiveRecord::Base
  belongs_to :ticket
  has_many :warnings, dependent: :destroy
  has_one :item, dependent: :destroy
  
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
        line.item = Item.create item_id: j["itemId"], description: line.description
        lines << line
    end
    lines
  end
  
  def find_changes old_line
    ["description", "uom", "quantity"].each do |attribute|
        unless old_line[attribute] == self[attribute]
            warning = Warning.create description: (attribute.capitalize + " changed from '" + old_line[attribute].to_s + "' to '" + self[attribute].to_s + ".'")
            self.warnings << warning
        end
    end
    old_line.warnings.each {|warning| warning.update line_id: self.id }
  end
  
end