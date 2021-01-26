class OrderItemsController < ApplicationController
  before_action :set_order

  def create
      @order_item = @order.order_items.new(order_params)
      @order.save
      session[:order_id] = @order.id
      binding.pry
      redirect_to request.referrer
  end

  private

  def order_params
    params.require(:order_item).permit(:product_id, :weight_in_oz)
  end

end
