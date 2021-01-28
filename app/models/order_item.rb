class OrderItem < ApplicationRecord
  belongs_to :product
  belongs_to :order

  before_save :set_total

  def total
    product.price_by_oz * weight_in_oz
  end

  private

  def set_total
    self[:total] = total
  end
end
