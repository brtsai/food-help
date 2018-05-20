json.set! business.id do
  json.extract! business, :id, :name, :address, :city, :state, :latitude, :longitude, :price
  json.rating 4.5
  json.set! :businessCategories, business.business_categories.map { |category| category.category }
  json.set! :reviews do
    json.array! business.reviews.map { |review| review.id }
  end
end
