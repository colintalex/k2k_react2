class Admin::SessionsController < ApplicationController
    def new;end

    def create
        user = User.find_by(email: params[:email].downcase)
        
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to admin_dashboard_path
        else
            flash.now[:error] = 'Unknown user. Please check your username and password.'
            render :action => "new"
        end
    end

    def destroy
        reset_session
        flash.now[:success] = 'Logged Out'
        redirect_to root_path
    end
end
