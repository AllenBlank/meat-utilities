json.array!(@tickets) do |ticket|
  json.extract! ticket, :id, :order_id, :order_num, :date_needed, :invoice_num, :invoice_date, :status_code, :customer_code, :total, :route_code, :order_date
  json.url ticket_url(ticket, format: :json)
end
