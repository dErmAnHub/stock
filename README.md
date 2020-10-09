# README
![ER図](https://user-images.githubusercontent.com/66255429/95590841-85654e80-0a81-11eb-9321-eedba50e416f.png)

## users
|Column  |Type  |Options   |
|--------|------|----------|
|name    |string|null:false|
|password|string|null:false|
|email   |string|null:false, unique:true|

### Association
- has_many :products

## products
|Column       |Type      |Options   |
|-------------|----------|----------|
|name         |string    |null:false, unique:true|
|quantity     |integer   |null:false|
|low_quantity |integer   |null:false|
|last_time    |integer   |          |　
|last_quantity|integer   |          |
|user_id      |references|null: false,foreign_key:true|

### Association
- has_many :notifications
- has_one :user

## notification
|Column    |Type      |Options    |
|----------|----------|-----------|
|type      |string    |null:false |
|checked   |integer   |null:false |
|product_id|references|null: false,foreign_key:true|

### Association
- has_one :product
