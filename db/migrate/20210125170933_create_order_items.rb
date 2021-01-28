class CreateOrderItems < ActiveRecord::Migration[6.1]
  def change
    create_table :order_items do |t|
      t.decimal :total, default: 0.00, precision: 15, scale: 2
      t.integer :weight_in_oz, default: 0, precision: 15, scale: 2
      t.belongs_to :product, null: false, foreign_key: true
      t.belongs_to :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
