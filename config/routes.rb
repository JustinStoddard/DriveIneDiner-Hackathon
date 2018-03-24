Rails.application.routes.draw do
  get 'items/index'

  get 'items/new'

  get 'items/show'

  get 'items/edit'

  get 'carts/index'

  get 'carts/new'

  get 'carts/show'

  get 'carts/edit'

  get 'purchases/index'

  get 'purchases/new'

  get 'purchases/show'

  get 'purchases/edit'

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
