class Order < ApplicationRecord
  has_many :order_items

  before_save :set_subtotal

  def subtotal
    order_items.collect {|order_item| order_item.valid? ? order_item.total : 0 }.sum
  end

  private

  def set_subtotal
    self[:subtotal] = subtotal
  end
end
