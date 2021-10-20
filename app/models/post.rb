class Post < ApplicationRecord
    validates :title, :author, :short_description, :content, presence: true

    def formatted_date
        created_at.strftime("%B %d, %Y")
    end
end