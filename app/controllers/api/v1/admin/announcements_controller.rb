class Api::V1::Admin::AnnouncementsController < ApplicationController
    def index
        @annoucements = Announcement.all()
    end
end