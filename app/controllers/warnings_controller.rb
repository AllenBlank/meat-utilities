class WarningsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def clear_warnings
    Warning.destroy_all
    redirect_to :back
  end
  
  def destroy
    warning = Warning.find params[:id]
    warning.destroy
    render json: ['fuck you']
  end
  
end
