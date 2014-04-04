Estate::Application.routes.draw do
  devise_for :admins
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'home#index'
  resources :properties do
    collection do
      get :search
      post :send_contact
      post :request_contact
    end
    member do
      post :post_contact
      get :update_view_count
    end
  end
  
  resources :users
  
  namespace :admin do
    resources :dashboards do
      member do
        put :activate_property
        put :inactivate_property
      end
      collection do
        get :users
      end
    end
    resources :properties do
      collection do
        get :sale
        get :rent
        get :lease
        get :search
        post :send_mail
      end
    end
    resources :users do
      collection do
        get :builders
        get :brokers
        get :individuals
      end
      member do
        get :listing_properties
      end
    end
    resources :newsletters
    resources :crms do
      member do
        get :builder_properties
      end
    end
  end
  
  get "about_us" => "home#about_us"
  get "privacy_policy" => "home#privacy_policy"
  get "help" => "home#help"
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
