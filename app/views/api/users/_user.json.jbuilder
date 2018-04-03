json.set! user.id do
  json.extract! user, :id, :username, :profile_picture_url, :city, :state
end
