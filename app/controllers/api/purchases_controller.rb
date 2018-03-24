class Api::PurchasesController < ApplicationController
  before_action :set_purchase, only: [:show, :create, :update, :destroy]

  def index
    render json: Purchases.all
  end

  def show
    render json: @purchase
  end

  def create
    purchase = Purchase.create(purchase_params)
    if purchase.save
      render json :purchase
    else 
      render json: { errors: purchase.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @purchase.update(purchase_params)
      render json: @purchase
    else
      render json: { errors: purchase.erros.full_messages.join }
    end
  end

  def destroy
    @purchase.destroy
  end

private

  def set_purchase
    @purchase = Purchase.find(params[:id])
  end

  def purchase_params
    params.purchase(:purchase).permit(:item_id, :cart_id)
  end

end
