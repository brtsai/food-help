json.business do
  json.partial! "api/businesses/business", business: @business
end

json.reviews({})
json.reviews do
  @business.reviews.each do |review|
    json.partial! "api/reviews/review", review: review
  end
end

json.users({})
json.users do
  @business.reviews.each do |review|
    json.partial! "api/users/user", user: review.user
  end
end
