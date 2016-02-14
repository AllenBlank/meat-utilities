class Ticket < ActiveRecord::Base
  has_many :lines, dependent: :destroy
  
  def self.get_session
    
    require 'net/http'
    require 'net/https'
    
    # Set the connection type to SSL
    http = Net::HTTP.new(ENV["FC_ADDR"], 443)
    http.use_ssl = true
    
    # Set the path to the service and the form information
    path = '/vn/md'
    data = ENV["FC_DATA"] + (Time.now.to_f.floor * 1000).to_s
    
    # Give it the cookies it expects and what it needs for basic authentication.
    headers = {
      'Cookie'=> ENV["FC_COOK"],
      'Authorization'=> ENV["FC_AUTH"], 
    }	
    
    # Make the request
    resp, data = http.post(path, data, headers)
    
    # Return the session cookie
    resp["set-cookie"].split(";")[0]
  end
end
