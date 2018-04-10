class Api::SearchController < ApplicationController
  def index
    p params[:search_term]
  end
end
