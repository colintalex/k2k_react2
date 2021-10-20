class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    helper_method :current_user, :current_admin?

    def current_user
        @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
    end

    def current_admin?
        current_user.present? && current_user.role.name == 'super_admin'
    end

    def authenticate
        redirect_to admin_login_path, alert: 'Top Secret' if current_user.nil?
    end
end
