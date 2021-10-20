class Api::V1::RecipesController < ApplicationController
  
  def index
    recipes = Recipe.all.order(created_at: :desc)
    render json: recipes
  end

  def new
    params = Recipe.new
    render json: params
  end

  def create
  recipe = Recipe.create!(recipe_params)
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def show
    if recipe
      render json: recipe
    else
      render json: recipe.errors
    end
  end

  def destroy
    if recipe&.destroy
      render json: { message: 'Recipe deleted!' }
    end
  end

  private

  def recipe_params
    params.permit(:name, :image, :ingredients, :instruction)
  end

  def recipe
    @recipe ||= Recipe.find(params[:id])
  end
end
