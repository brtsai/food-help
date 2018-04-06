class Business < ApplicationRecord
  validates :owner_id, presence: true
  validates :name, :neighbourhood, :address, :city, :state, :latitude, :longitude, presence: true
  validates :price, presence: true, inclusion: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
  
  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :business_category_memberships
  has_many :business_categories,
    through: :business_category_memberships

  def categories=(categories)
  end

  def has_category?(category)
    !!self.business_categories.find_by_category(category)
  end

end
