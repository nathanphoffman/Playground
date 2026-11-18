class PeopleController < ApplicationController
  def index
    render json: Person.all  # Person is an ActiveRecord model backed by the `people` table
  end
end
