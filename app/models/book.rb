class Book < ApplicationRecord
    has_many :pages, dependent: :destroy
    accepts_nested_attributes_for :pages
    scope :with_attached_pages, -> { includes(:pages).merge(Page.with_attached_image)}

    def cover_page
        pages.ordered.first
    end

    def back_cover
        pages.ordered.last
    end

    def content_pages
        pages.ordered[1..-2]
    end
end