class Api::PurchasesController < ApplicationController
  before_action :set_purchase, only: [:show, :create, :update, :destroy]

  def index
    render json: Purchases.all
  end

  def show
    render json: @purchase
  end

  def create
    
  end

  def update
  end

  def destroy
  end

private

  def set_purchase
    @purchase = Purchase.find(params[:id])
  end

  def purchase_params
    params.purchase(:purchase).permit(:item_id, :cart_id)
  end

end
