class Page < ApplicationRecord
    belongs_to :book

    has_one_attached :image
    delegate_missing_to :image

    scope :ordered, -> {order(page_number: :asc)}

end
