class Api::BusinessesController < ApplicationController
  def create
    @business = Business.new(business_params)
    if @business.save
      
#      p 'params' 
#      p params
#      p ''
#
#      p 'params[business][categories]'
#      p params[:business][:categories]
#      p ''
#
#      p 'business_params'
#      p business_params
#      p ''
#
#      p 'business_params[categories]'
#      p business_params[:categories]
#      p ''

      unless params[:business][:categories].nil?
        params[:business][:categories].each do |unused, category|
          cleaned_category = sanitize_business_category(category)
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
    params.require(:business).permit(:owner_id, :name, :neighbourhood, :address, :city, :state, :latitude, :longitude, :price, categories: [])
  end
end
