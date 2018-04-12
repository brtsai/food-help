#TODO Prevent impersonation of other users on creating reviews
class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.first(5)
    render :index
  end

  def show
    @review = Review.find_by_id(params[:id])
    
    unless @review.nil?
      render :show
    else
      render json: ["No such review"], status: 404
    end
  end

  def update
    @review = Review.find_by_id(params[:id])
    
    unless @review.nil?
      if @review.update(review_params)
        render :show
      else
        render json: @review.errors.full_messages, status: 422
      end
    else
      render json: ["No such review"], status: 404
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])

    unless @review.nil?
      @review.destroy
      render :show
    else
      render json: ["No such review"], status: 404
    end
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :business_id, :rating, :review)
  end
end
