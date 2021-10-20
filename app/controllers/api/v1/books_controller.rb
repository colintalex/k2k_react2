class BooksController < ApplicationController
    before_action :authenticate, except: [:index, :show]

    def index
        @books = Book.all
    end

    def show
        @book = Book.find_by(id: params[:id])
    end

    private

    def book_params
        params.require(:book).permit(:title, :description, :author, :illustrator)
    end

    def page_params
        params.require(:book).permit(images: [])
    end

end