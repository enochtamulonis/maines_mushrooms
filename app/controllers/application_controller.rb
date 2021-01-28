class ApplicationController < ActionController::Base
  include ApplicationHelper

  def set_order
    @order = current_order
  end
end
