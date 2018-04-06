json.array! @businesses do |business|
  json.partial! "api/businesses/business", business: business
end
