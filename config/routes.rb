Rails.application.routes.draw do
  resources :products
  get '/home', to: "pages#home"
  get '/about', to: "pages#about"
  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
