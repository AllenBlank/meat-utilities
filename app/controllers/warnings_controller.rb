class WarningsController < ApplicationController
  def clear_warnings
    Warning.destroy_all
    redirect_to :back
  end
end
