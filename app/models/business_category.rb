class BusinessCategory < ApplicationRecord
  validates :category, presence: true, uniqueness: true

  has_many :business_category_memberships
  has_many :businesses,
    through: :business_category_memberships
end
