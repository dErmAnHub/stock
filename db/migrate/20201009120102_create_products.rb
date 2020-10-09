class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string  :name,         null: false, unique: true
      t.integer :quantity,     null: false
      t.integer :low_quantity, null: false
      t.integer :last_time
      t.integer :last_quantity
      # t.references :user, null:false, foreign_key:true
      t.timestamps
    end
  end
end
