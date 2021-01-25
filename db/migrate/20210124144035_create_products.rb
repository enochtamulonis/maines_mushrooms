class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name, default: ""
      t.decimal :price, default: 0.00, precision: 10, scale: 2

      t.timestamps
    end
  end
end
