class Admin::WorkshopsController < ApplicationController
    def index
        @workshops = Workshop.all()
    end

    def new
        @workshop = Workshop.new()
    end

    def create
        @workshop = Workshop.new(workshop_params)
        if @workshop.save
            redirect_to admin_workshops_path
        end
    end

    def edit
        @workshop = Workshop.find_by(id: params[:id])

    end

    def update
        @workshop = Workshop.find_by(id: workshop_params[:id])
        if @workshop.update!(workshop_params)
            redirect_to admin_workshops_path()
        else
            redirect_to edit_admin_workshop_path(@workshop.id)
        end
    end

    def show

    end

    def destroy
        @workshop = Workshop.find_by(id: params[:id])
        if @workshop.destroy()
            redirect_to admin_workshops_path()
        end
    end

    private

    def workshop_params
        params.require(:workshop).permit(:id, :name, :short_description, :description, :date, :street, :city, :state, :zip, :free?, :cost, :max_reservations)
    end
end