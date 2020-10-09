class Product < ApplicationRecord

  has_many :notifications, dependent: :destroy
end
