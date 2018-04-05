class Business < ApplicationRecord
  validates :owner_id, presence: true
  validates :name, :neighbourhood, :address, :city, :state, :latitude, :longitude, presence: true
  validates :price, presence: true, inclusion: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  
  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User


end
