class Api::BusinessesController < ApplicationController
  # TODO: implement creating business categories/memberships
  def create
    @business = Business.new(business_params)
    if @business.save
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

  def business_params
    params.require(:business).permit(:owner_id, :name, :neighbourhood, :address, :city, :state, :latitude, :longitude, :price, :categories)
  end
end
