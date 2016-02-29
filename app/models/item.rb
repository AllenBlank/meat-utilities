class Item < ActiveRecord::Base
  has_many :warnings, dependent: :destroy
  after_create :get_info, :generate_warnings
  
  def self.create_from_description description
    data = Fc.get_item_by_description description
    item = Item.new data
    item.save
    item
  end

  def get_info
    status = Fc.get_item_info self.item_id.floor
    self.uom = status[:uom]
    status[:warehouses].each do |warehouse|
      if warehouse["warehouseCode"] == "BN"
        self.bn_stock = warehouse["inStockQty"].delete(",").to_i
        self.bn_avail = warehouse["availableStock"].delete(",").to_i
      elsif warehouse["warehouseCode"] == "Dreisbac"
        self.ds_stock = warehouse["inStockQty"].delete(",").to_i
        self.ds_avail = warehouse["availableStock"].delete(",").to_i
      end
    end
    self.save
  end
  
  def generate_warnings
    if self.bn_avail.nil? || self.bn_avail < 40
      if self.ds_avail && self.ds_avail > 40
        self.warnings << Warning.create( description: "Available stock in BN is " + self.bn_avail.to_s +  " " + self.uom + " transfer from Dreisbach?" )
      else
        self.warnings << Warning.create( description: 
          "Available stock in BN is " + self.bn_avail.to_s +  " " + self.uom + 
          " with "  + self.bn_stock.to_s +  " " + self.uom + " on hand. Nothing in Dreisbach."
          )
      end
    end
  end
  
  def is_frozen?
    ( self.description[2] == "1" || description["FROZEN"] ) ? true : false
  end
  
end