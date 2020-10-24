class ProductsController < ApplicationController
  def index
    @product = Product.order ('created_at DESC')
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to root_path
    else
      render :new
    end
  end

private
  def product_params
    params.require(:product).permit(:name, :quantity, :low_quantity)
  end
end
