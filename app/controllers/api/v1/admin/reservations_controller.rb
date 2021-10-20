class Admin::ReservationsController < ApplicationController
    def index
        @workshop = Workshop.find_by(id: params[:workshop_id])
        @reservations = @workshop.reservations
    end

    def new
        @workshop = Workshop.find_by(id: params[:workshop_id])
        @reservation = @workshop.reservations.new()
    end

    def create
        @workshop = Workshop.find_by(id: reservation_params[:workshop_id])
        if @workshop.reservations.create!(reservation_params)
            redirect_to admin_reservations_path(workshop_id: @workshop.id)
        end
    end

    def edit
        @reservation = Reservation.find_by(id: params[:id]) 
        @workshop = @reservation.workshop
    end

    def update
        @reservation = Reservation.find_by(id: params[:id]) 
        @reservation.update(reservation_params)
        if @reservation.save!
            redirect_to admin_reservations_path(workshop_id: @reservation.workshop.id)
        end
    end

    private
    
    def reservation_params
        params.require(:reservation).permit(:name_first, :name_last, :email, :phone_number, :grade, :safety_notes, :other_notes, :ticket_count, :workshop_id, :paid?)
    end
end

