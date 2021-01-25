class ChangeNameOfPriceColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :products, :price, :price_by_pound
  end
end
