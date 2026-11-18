class HelloController < ApplicationController
  # GET /hello/:name  (see config/routes.rb)
  def show
    render json: { message: "Hello, #{params[:name]}" }
  end
end
