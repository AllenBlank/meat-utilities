class Fc < ActiveRecord::Base
  # Blank space for a shared agent variable
  @@agent = nil
  
  # Simulate JS Date.now
  def self.date_now
    (Time.now.to_f * 1000).floor.to_s
  end
  
  # Get a valid session cookie
  def self.auth
    @@agent = Mechanize.new { |agent|
      agent.user_agent_alias = "Mac Safari"
    }
    # Get the basic Auth working for the domain
    @@agent.add_auth(ENV["FC_ADDR"],ENV["FC_USER"],ENV["FC_PASS"])
    
    # Get the login page, and set the domain
    @@agent.get(ENV["FC_ADDR"] + "/login.html")
    
    # Get a bad session cookie, then a good one, then log in for real.
    @@agent.post(ENV["FC_AUTH"] + date_now )
    @@agent.get("launcher.html?_=" + date_now )
    @@agent.post(ENV["FC_AUTH"] + date_now )
  end
  
  def self.log_out
    @@agent.post("md?_=" + date_now + "&m=logout&ncuid=" + (date_now.to_i - 500 ).to_s)
  end
  
  def self.is_auth?
    return false unless @@agent
    body = JSON.parse( @@agent.get("md?m=hasSession").body )
    ( body["session"] == "true" ) ? true : false
  end
  
  def self.request_json data
    auth unless is_auth?
    reply = @@agent.post( data ).body
    JSON.parse reply
  end
  
  # Grab a list of all pick tickets from the server, and parse it into an array
  def self.get_tickets
    tickets = request_json("md?m=rpc&n=PickTicketList&v=1&ncuid=" + date_now )
    tickets["TTpickTicketList"]
  end
  
  # Grab a list of line items for a particular order_id, and parse it into an array
  def self.get_lines( order_id )
    lines = request_json("md?m=rpc&n=OrderLinesGetFillShip&v=1&ncuid=" + date_now + "&orderId=" + order_id.to_s)
    lines["OutFillShipLines"]
  end
  
  def self.get_item_info item_id 
    status = request_json("md?m=rpc&n=IclineDefaultGet&v=1&ncuid=" + date_now + "&itemId=" + item_id.to_s + "&icheadId=0&iclineId=null&source=Adj")
    return {} if status.nil?
    {
      uom: status["OutICinfo"][0]["uom"],
      warehouses: status["TTwarehouse"]
    }
  end
  
end