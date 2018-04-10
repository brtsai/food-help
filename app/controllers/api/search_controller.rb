class Api::SearchController < ApplicationController
  def index
    p params[:search_term]
    render json: { message: "hi" }
  end
end
