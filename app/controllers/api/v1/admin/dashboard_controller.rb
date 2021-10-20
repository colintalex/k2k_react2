class Admin::DashboardController < ApplicationController
    before_action :authenticate
    def index
        @books = Book.all()
        @posts = Post.all()
        @workshops = Workshop.all()
    end
end