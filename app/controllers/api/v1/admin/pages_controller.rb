class Admin::PagesController < ApplicationController
    before_action :authenticate
    def edit
        @book = Book.find_by(id: params[:id])
        @pages = @book.pages
    end

    def update
        @book = Book.find_by(id: params[:id])
        save_pages
    end

    private

    def save_pages
        pages = @book.pages
        page_array = params[:updates]
        pages.each do |page|
            page.page_number = page_array[page.id.to_s]
            page.save!
        end
    end

    def update_page_params
        params.permit(:updates)
    end
end