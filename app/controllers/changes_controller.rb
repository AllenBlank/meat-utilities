class ChangesController < ApplicationController
  def clear_changes
    Change.destroy_all
    redirect_to :back
  end
end
