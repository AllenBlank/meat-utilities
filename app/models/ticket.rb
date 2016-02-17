class Ticket < ActiveRecord::Base
    has_many :lines, dependent: :destroy
    has_many :ticket_changes, foreign_key: "ticket_id", class_name: "Change", dependent: :destroy
    belongs_to :list
    
    def line_changes
        changes = []
        self.lines.each do |line|
            changes << line.line_changes unless line.line_changes.empty?
        end
        changes
    end
                   
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
        tickets.each do |ticket|
            lines = Line.build_lines ticket.order_id
            lines.each do |line|
                ticket.lines << line
            end
        end
        tickets
    end
    
    def self.update_tickets
        old_tickets = Ticket.all.map {|ticket| ticket.order_id}
        new_tickets = build_tickets.map {|ticket| ticket.order_id}
        
        created_tickets = new_tickets - old_tickets
        deleted_tickets = old_tickets - new_tickets
        
        persist_tickets = new_tickets - created_tickets
        
        
    end
    
    def find_changes old_ticket
        ticket_attributes = ["order_id", "order_num", "date_needed", "invoice_num", "invoice_date", "status_code", "customer_code", "total", "route_code", "order_date"]
        ticket_attributes.each do |k|
            unless self[k] == old_ticket[k]
                change = change.create description:  ("The " + k + " field was changed.")
                ticket.ticket_changes << change
            end
        end
        
        new_lines = self.lines.map {|line| line.line_id}
        old_lines = old_ticket.lines.map {|line| line.line_id}
        
        created_lines = new_lines - old_lines
        created_lines.each do |line_id| 
            description = self.lines.find_by_line_id(line_id).description
            change = Change.create description: ("ADDED: " + description)
            self.ticket_changes << change
        end
        
        deleted_lines = old_lines - new_lines
        deleted_lines.each do |line_id| 
            description = old_ticket.lines.find_by_line_id(line_id).description
            change = Change.create description: ("REMOVED: " + description)
            self.ticket_changes << change
        end        
        
        persist_lines = new_lines - created_lines
        persist_lines.each do |line_id|
            newer_line = self.lines.find_by_line_id line_id
            older_line = old_ticket.lines.find_by_line_id line_id
            ["description", "uom", "quantity"].each do |attribute|
                unless older_line[attribute] == newer_line[attribute]
                    change = Change.create description: (attribute.capitalize + " changed from '" + older_line[attribute] + "' to '" + newer_line[attribute] + ".'")
                    newer_line.line_changes << change
                end
            end
        end
        
    end
  
end
