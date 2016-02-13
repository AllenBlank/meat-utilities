json.array!(@lines) do |line|
  json.extract! line, :id, :description, :uom, :quantity
  json.url line_url(line, format: :json)
end
