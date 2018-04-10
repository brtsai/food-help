json.businesses do 
  @businesses.each do |business|
    json.partial! "api/businesses/business", business: business
  end
end

json.set! :search_results, @business_ids
