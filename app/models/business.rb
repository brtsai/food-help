class Business < ApplicationRecord
  validates :owner_id, presence: true
  validates :name, :address, :city, :state, :latitude, :longitude, presence: true
  validates :price, presence: true, inclusion: [1, 2, 3, 4, 5]
  
  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :business_category_memberships
  has_many :business_categories,
    through: :business_category_memberships
  has_many :reviews
  # discard categories passed in by constructor when being built
  # from the controller's business_params
  def categories=(categories)
  end

  def has_category?(category)
    !!self.business_categories.find_by_category(category)
  end

  def self.find_with_ids(id_array)
    id_string = id_array.join(',')
    p id_string
    Business.where("id IN (#{id_string})")
  end

  # TODO
  def self.apply_filters(filter_hash) 
    
  end
end
