class AddPriceByOzToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :price_by_oz, :decimal, default: 0.00, precision: 10, scale: 2
  end
end
