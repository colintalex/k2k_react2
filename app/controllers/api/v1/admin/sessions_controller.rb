class Api::V1::Admin::SessionsController < ApplicationController
  def new;end

  def create
    user = User.find_by(email: params[:email].downcase)
    if user&.authenticate(params[:password])
      exp = Time.now.to_i + 4 * 3600
      exp_payload = { user_id: user.id, exp: exp }
      token = encode(exp_payload)
      session[:user_id] = user.id
      render json: { user: user, token: token }
    else
      # flash.now[:error] = 'Unknown user. Please check your username and password.'
      render json: 'Error', status: :multiple_choices
      # render json: 'Error'
    end
  end

  def destroy
    reset_session
    flash.now[:success] = 'Logged Out'
    redirect_to root_path
  end

  def token_authenticate
    token = request.headers['Authenticate']
    begin
      user = User.find(decode(token)[0]['user_id'])
    rescue JWT::ExpiredSignature
      # Handle expired token, e.g. logout user or deny access
      render json: 'Invalid token. Try sigining back in.', status: :unauthorized
    else
      render json: user, status: :ok
    end
  end
end
