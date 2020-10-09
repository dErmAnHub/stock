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
|name         |string    |null:false, unique:true|      製品名
|quantity     |integer   |null:false|                   在庫数
|low_quantity |integer   |null:false|　                 在庫切れ通知個数
|last_time    |integer   |　                            前回のリストックされるまでの期間
|last_quantity|integer   |                              前回のリストックされるまでに出荷した在庫数
|user_id      |references|null: false,foreign_key:true|

### Association
- has_many :notifications
- has_one :user

## notification
|Column    |Type      |Options    |
|----------|----------|-----------|
|type      |string    |null:false |                     通知の種類
|checked   |integer   |null:false |                     通知確認
|product_id|references|null: false,foreign_key:true|

### Association
- has_one :product
