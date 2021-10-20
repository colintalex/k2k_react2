class Admin::BooksController < ApplicationController
    before_action :authenticate
    def index
        @books = Book.all()
    end

    
    def new
        @book = Book.new()
    end

    def create
        @book = Book.create(book_params)
        if @book.valid?
            page_params[:images].each_with_index do |image, index|
                Page.create!( page_number: index + 1, book_id: @book.id, image: image)
            end
            redirect_to admin_edit_book_pages_path(@book.id)
        end
    end
    
    def edit
        @book = Book.find_by(id: params[:id])
    end

    def update
        @book = Book.find_by(id: params[:id])
        if @book.update!(book_params)
            redirect_to admin_dashboard_path
        end
    end

    def destroy
        book = Book.find_by(id: params[:id])
        if book.destroy
            redirect_to admin_books_path
        end
    end

        private

    def book_params
        params.require(:book).permit(:title, :description, :author, :illustrator)
    end

    def page_params
        params.require(:book).permit(images: [])
    end
end