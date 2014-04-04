class Admin::CrmsController < ApplicationController
  #GET /admin/crms/new
  def new
    @crm = Crm.new
    @crms = Crm.all
  end
  
  #POST /admin/crms/
  def create
    @crm = Crm.new(crm_params)
    if @crm.save
      @crms =  Crm.all
      respond_to do |format|
        format.js
      end
    else
      render "new"
    end
  end
  
  # GET /admin/crms/:id/builder_properties
  def builder_properties
    @properties = Property.where("name = ?", params[:id])
  end
  
  private
  def crm_params
    params.require(:crm).permit!    
  end
end
