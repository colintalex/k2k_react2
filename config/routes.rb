Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show]
      resources :pages, only: [:index, :show]
      resources :posts, only: [:index, :show, :update_likes]

      namespace :admin, admin: true do
        get '/login', to: 'sessions#new'
        post '/login', to: 'sessions#create'
        get '/logout', to: 'sessions#destroy'
        
        get '/', to: 'dashboard#index', as: 'dashboard'

        resources :posts
        resources :books
        resources :pages
        resources :announcements
        resources :workshops
        resources :reservations

        get '/books/:id/pages', to: 'pages#edit', as: 'edit_book_pages'
        patch '/books/:id/pages', to: 'pages#update', as: 'update_book_pages'
      end
    end
  end
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
