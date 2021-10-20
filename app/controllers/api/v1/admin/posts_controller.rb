class Admin::PostsController < ApplicationController
    before_action :authenticate
    def new
        @post = Post.new
    end

    def index
        @posts = Post.all
    end

    def create
        post = Post.new(post_params)
        if post.save
            flash.notice = 'Post created'
            redirect_to admin_posts_path
        else
            # render json: {error: post.errors.full_messages}
            flash.alert = post.errors.full_messages.join(', ')
            redirect_to new_admin_post_path
        end
    end

    def edit
        @post = Post.find_by(id: params[:id])
    end

    def update
        @post = Post.find_by(id: params[:id])
        @post.update(post_params)
        if @post.save 
            redirect_to admin_posts_path
        else
            redirect_to referrer
        end
    end

    def show
        @post = Post.find_by(id: params[:id])
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        @post.destroy
        redirect_to admin_posts_path
    end
    private

    def post_params
        params.require(:post).permit(:title, :author, :short_description, :content, :likes, :comments)
    end
end
