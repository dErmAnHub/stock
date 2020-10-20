class ProductsController < ApplicationController
  def index
  end

  def new
    @product = Product.new
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to new_product_path
    else
      render :new
    end
  end

private
  def product_params
    params.require(:product).permit(:name, :quantity, :low_quantity)
  end
end
