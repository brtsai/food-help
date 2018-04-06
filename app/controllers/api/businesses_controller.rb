class Api::BusinessesController < ApplicationController
  # TODO: implement creating business categories/memberships
  def create
    @business = Business.new(business_params)
    if @business.save
      render "api/business/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def show

  end

  def index

  end

  private

  def business_params
    params.require(:business).permit(:owner_id, :name, :neighbourhood, :address, :city, :state, :latitude, :longitude, :price, :categories)
  end
end
