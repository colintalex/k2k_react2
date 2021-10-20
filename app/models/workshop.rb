class Workshop < ApplicationRecord
    has_many :reservations, dependent: :destroy
    validates :name, :description, :short_description, :date, :street, :city, :state, :zip, :max_reservations, :cost, presence: true

    enum status: { active: 10, pending: 30, closed: 40}
end