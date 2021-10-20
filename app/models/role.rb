class Role < ApplicationRecord
    has_many :users, dependent: :nullify, inverse_of: :role

    enum name: { admin: 10, super_admin: 20 }
end
