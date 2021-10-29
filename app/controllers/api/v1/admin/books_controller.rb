class Api::V1::Admin::BooksController < ApplicationController
  before_action :authenticate
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    @book = Book.create(book_params)
    return unless @book.valid?

    unless page_params[:images].nil?
      page_params[:images].each_with_index do |image, index|
        Page.create!(page_number: index + 1, book_id: @book.id, image: image)
      end
    end
    render json: @book
  end

  def edit
    @book = Book.find_by(id: params[:id])
  end

  def update
    @book = Book.find_by(id: params[:id])
    return unless @book.update!(book_params)

    redirect_to admin_dashboard_path
  end

  def destroy
    book = Book.find_by(id: params[:id])
    return unless book.destroy

    redirect_to admin_books_path
  end

  private

  def book_params
    params.require(:book).permit(:title, :description, :author, :illustrator)
  end

  def page_params
    params.require(:book).permit(images: [])
  end
end
