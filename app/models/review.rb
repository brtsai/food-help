class Review < ApplicationRecord
  validates :user_id, :business_id, presence: true
  validates :rating, presence: true, inclusion: [1,2,3,4,5]
  validates :review, presence: true, length: { minimum: 10 }

  belongs_to :user
  belongs_to :business
end
