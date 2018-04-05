class BusinessCategoryMembership < ApplicationRecord
  validates :business_id, :business_category_id, presence: true

  belongs_to :business
  belongs_to :business_category
end
