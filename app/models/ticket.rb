class Ticket < ActiveRecord::Base
    has_many :lines, dependent: :destroy
    has_many :warnings
    belongs_to :list
    after_create :add_lines
    
    def self.build_tickets
        json = Fc.get_tickets
        tickets = []
        json.each do |j|
            ticket = Ticket.new
            ticket.order_id = j["orderId"]
            ticket.order_num = j["orderNo"]
            ticket.date_needed = Date.strptime( j["dateNeeded"], "%m/%d/%Y" ) unless j["dateNeeded"].blank?
            ticket.invoice_num = j["invoiceNo"]
            ticket.invoice_date = Date.strptime( j["invoiceDate"], "%m/%d/%Y" ) unless j["invoiceDate"].blank?
            ticket.status_code = j["statusCode"]
            ticket.customer_code = j["customerCode"]
            ticket.total = j["total"]
            ticket.route_code = j["routeCode"]
            ticket.order_date = Date.strptime( j["orderDate"], "%m/%d/%Y" ) unless j["orderDate"].blank?
            ticket.save
            tickets << ticket
        end
        tickets
    end
    
    def add_lines
        self.lines << Line.build_lines( self.order_id )
    end
    
    def find_changes old_ticket
        ticket_attributes = ["order_id", "order_num", "date_needed", "invoice_num", "invoice_date", "status_code", "customer_code", "total", "route_code", "order_date"]
        ticket_attributes.each do |k|
            unless self[k] == old_ticket[k]
                warning = Warning.create description:  ("The " + k + " field was changed.")
                self.warnings << warning
            end
        end
        
        new_lines = self.lines.map {|line| line.line_id}
        old_lines = old_ticket.lines.map {|line| line.line_id}
        
        created_lines = new_lines - old_lines
        created_lines.each do |line_id| 
            description = self.lines.find_by_line_id(line_id).description
            warning = Warning.create description: ("ADDED: " + description)
            self.warnings << warning
        end
        
        deleted_lines = old_lines - new_lines
        deleted_lines.each do |line_id| 
            description = old_ticket.lines.find_by_line_id(line_id).description
            warning = Warning.create description: ("REMOVED: " + description)
            self.warnings << warning
        end        
        
        persist_lines = new_lines - created_lines
        persist_lines.each do |line_id|
            newer_line = self.lines.find_by_line_id line_id
            older_line = old_ticket.lines.find_by_line_id line_id
            newer_line.find_changes older_line
        end
        
        old_ticket.warnings.each {|warning| warning.update ticket_id: self.id }
        
    end
  
end
