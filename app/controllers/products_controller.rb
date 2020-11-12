class ProductsController < ApplicationController
  before_action :set_product, only: [:edit, :update, :destroy]
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

  def edit
  end

  def update
    if @product.update(product_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def destroy
    if @product.destroy
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

private
  def product_params
    params.require(:product).permit(:name, :quantity, :low_quantity)
  end

  def set_product
    @product = Product.find(params[:id])
  end
end
