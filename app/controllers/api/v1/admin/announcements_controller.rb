class Admin::AnnouncementsController < ApplicationController
    def index
        @annoucements = Announcement.all()
    end
end