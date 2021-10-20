class User < ApplicationRecord
    has_secure_password

    belongs_to :role

    validates :email, presence: true, uniqueness: true
    validates :name_first, :name_last, presence: true
end
