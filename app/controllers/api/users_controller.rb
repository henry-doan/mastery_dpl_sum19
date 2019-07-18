class Api::UsersController < ApplicationController

  def index
    render json:  User.all
  end

  def create
  # Use devise
  end

  def update
  user = User.find(params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    User.find(params[:id]).destroy
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :admin, :id)
  end

end
