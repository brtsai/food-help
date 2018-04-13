json.set! user.id do
  json.extract! user, :id, :username, :profile_picture_url, :city, :state
  json.set! :reviews do
    json.array! user.reviews.map { |review| review.id }
  end
  
  json.businessToReview({})
  json.set! :businessToReview do
    user.reviews.each do |review|
      json.set! review.business_id, review.id
    end
  end
end
