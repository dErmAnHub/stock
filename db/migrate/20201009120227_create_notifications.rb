class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.string     :type,     null: false
      t.integer    :checked,  null: false, default: false
      t.references :product,  null: false, foreign_key:true
      t.timestamps
    end
  end
end
