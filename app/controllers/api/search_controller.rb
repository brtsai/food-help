class Api::SearchController < ApplicationController
  def index
    p params[:search_string]
    search_string = params[:search_string]
    business_hash = Hash.new(0)
    #filter_hash = param_filters_to_hash

    unless search_string.nil? || search_string.empty?
      search_string.split(', ').each do |term|
        record_business_query_results(term, business_hash)
        record_category_query_results(term, business_hash)
      end
      top_five_in_hash = business_hash.sort { |l, r| r[1] <=> l[1] }.first(5)
      top_five_business_ids = top_five_in_hash.map { |id, count| id }

      unless top_five_business_ids.empty?
        @business_ids = top_five_business_ids
        @businesses = Business.find_with_ids(top_five_business_ids)
        render "api/search/index"
      else
        render json: ["No results found"], status: 422
      end
    else
      render json: ["Search string can't be empty"], status: 422
    end
  end

  private

  #TODO
  def param_filters_to_hash
    filter_hash = Hash.new
    
    price_filter_params = params[:price_filter]
    unless price_filter_params.nil?
      price_filter_params.split(",").each do |price_point|
        next unless [1,2,3,4,5].include?(price_point)

      end

    end

    filter_hash
  end

  def record_business_query_results_by_field(field, term, hash)
    like_field_businesses = Business.where("lower(#{field}) like ?", "%#{term}%".downcase)
    like_field_businesses.each do |business|
      hash[business.id] += 1
    end
  end

  def record_business_query_results (term, hash)
    record_business_query_results_by_field("name", term, hash)
    record_business_query_results_by_field("neighbourhood", term, hash)
    record_business_query_results_by_field("address", term, hash)
  end

  def record_category_query_results (term, hash)
    like_categories = BusinessCategory.where("lower(category) like ?", "%#{term}%".downcase)
    like_categories.each do |category|
      category.businesses.each do |business|
        hash[business.id] += 1
      end
    end
  end
end
