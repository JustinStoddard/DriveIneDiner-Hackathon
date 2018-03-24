class Api::CartsController < ApplicationController
  before_action :set_cart, only: [:show, :create, :update, :destroy]

  def index
    render json: Carts.all
  end
  
  def show
    render json: @cart
  end

  def create
    cart = cart.create(cart_params)
    if cart.save
      render json :cart
    else 
      render json: { errors: cart.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: { errors: cart.erros.full_messages.join }
    end
  end

  def destroy
    @cart.destroy
  end

private

  def cart_params
    params.cart(:cart).permit(:item_id, :cart_id)
  end

  def set_cart
    @cart = cart.find(params[:id])
  end
end
