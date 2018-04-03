class Api::SessionsController < ApplicationController
  def create
    p params[:user]
    @user = User.find_by_credentials(params[:user])
    if (@user)
      login(@user)
      render "api/users/show"
    else
      @errors = ["Invalid Credentials"]
      render :errors, status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      @errors = ["Not logged in"]
      render :errors, status: 404
    end
  end

end
