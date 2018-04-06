class Api::BusinessesController < ApplicationController
  def create
    @business = Business.new(business_params)
    if @business.save
      unless business_params[:categories].nil?
        business_params[:categories].each do |category_string|
          cleaned_category = sanitize_business_category(category_string)
          next if cleaned_category.empty?
          next if @business.has_category?(cleaned_category)
          
          # get/create business category to add to business
          business_category = BusinessCategory.find_by_category(cleaned_category)
          if business_category.nil?
            business_category = BusinessCategory.create({category: cleaned_category})
          end
          
          #add category to business
          @business.business_categories.push(business_category)
        end
      end

      render "api/businesses/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show
    @business = Business.find_by_id(params[:id])
    if @business
      render :show
    else
      render json: ["no such business"], status: 404
    end
  end

  # TODO: implement index with query filters/search
  def index
    @businesses = Business.first(5)
    render :index
  end

  private

  def sanitize_business_category(category)
    category.split(" ").map{ |word| word.capitalize}.join(" ").strip
  end

  def business_params
    params.require(:business).permit(:owner_id, :name, :neighbourhood, :address, :city, :state, :latitude, :longitude, :price, :categories => [])
  end
end
