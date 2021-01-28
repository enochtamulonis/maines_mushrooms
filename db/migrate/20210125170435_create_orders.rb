class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.decimal :total, default: 0.00, precision: 15, scale: 2
      t.decimal :subtotal, default: 0.00, precision: 15, scale: 2

      t.timestamps
    end
  end
end
