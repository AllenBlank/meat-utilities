class SearchesController < ApplicationController
  before_action :set_search, only: [:show]

  def show
    @item = Item.create_from_description @search.term
  end

  # GET /searches/new
  def new
    @search = Search.new
  end

  def create
    @search = Search.create(search_params)
    redirect_to @search
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_search
      @search = Search.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def search_params
      params.require(:search).permit(:term)
    end
end
