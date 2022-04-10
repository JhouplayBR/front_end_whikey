class IndexController < ApplicationController
  before_action :get_whisky
  def index
    @whisky
  end

  def get_whisky
    @whisky = WhiskyList.new
  end
end
