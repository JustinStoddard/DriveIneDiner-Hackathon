Rails.application.routes.draw do
  namespace :api do
    get 'carts/index'
  end

  namespace :api do
    get 'carts/new'
  end

  namespace :api do
    get 'carts/show'
  end

  namespace :api do
    get 'carts/edit'
  end

  namespace :api do
    get 'itemss/index'
  end

  namespace :api do
    get 'itemss/new'
  end

  namespace :api do
    get 'itemss/show'
  end

  namespace :api do
    get 'itemss/edit'
  end

  namespace :api do
    get 'purchases/index'
  end

  namespace :api do
    get 'purchases/new'
  end

  namespace :api do
    get 'purchases/show'
  end

  namespace :api do
    get 'purchases/edit'
  end

  get 'index/new'

  get 'index/show'

  get 'index/edit'

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
