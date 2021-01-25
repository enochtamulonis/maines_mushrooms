class Product < ApplicationRecord
  has_many_attached :images
  has_rich_text :description
  before_save :set_price_by_oz

  def price_by_oz
    self[:price_by_pound] / 16
  end

  private

  def set_price_by_oz
    self[:price_by_oz] = price_by_oz
  end

end
