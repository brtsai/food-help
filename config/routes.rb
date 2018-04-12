Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :businesses, only: [:index, :show, :create]
    resources :search, only: [:index]
    resources :reviews, only: [:index, :show, :create, :destroy, :update]
  end

  root "static_pages#root"
end
