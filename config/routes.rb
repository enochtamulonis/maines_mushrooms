Rails.application.routes.draw do
  get '/home', to: "pages#home"
  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
