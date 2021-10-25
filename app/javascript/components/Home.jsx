import React from "react";
import { Link } from "react-router-dom";

export default () => (
<div>
  <div className="carousel" id="home-carousel">
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item ">
          {/* <%= image_tag ('page_header') %> */}
        </div>
        <div className="carousel-item active">
          {/* <%= image_tag ('k2k_about') %> */}
        </div>
        <div className="carousel-item">
          {/* <%= image_tag ('page_header') %> */}
        </div>
      </div>
    </div>
  </div>
  <div id="home" className="page-container">
    <div id="quick-about-container" className="container">
      <p>CONNECTING CHILDREN THROUGH LITERACY
        We demystify the writing process by creating a safe space for our youngest authors to explore their thoughts and ideas.  All children have stories to tell and each workshop begins with storytelling which is a way to build their own community of writers.  During the workshop, we provide expert coaching to maintain focus and build creativity while maintaining
      </p>
    </div>
    <div id="lrg-banner-container" className="container">
      <h2>
        Kid2KidLit is the proud recipient of the VELA meet the moment Grant!  Thank You VELA education fund.
      </h2>
    </div>
    <div id="workshops-container">
      <h3>Workshops</h3>
      <ul>
      {/* <% @workshops.each do |work| %> */}
        <li>
        {/* <%= work.name %>
        <%= work.short_description %>
        <%= work.date %>
        <%= link_to 'Register', new_admin_reservation_path(workshop_id: work.id) %> */}
        ListItem
        </li>
      {/* <% end %> */}
      </ul>
    </div>
    <div id="sml-banner-container">
      Smol Announcements
    </div>
    <div id="parents-reviews">
      reviews
    </div>
    <div id="blog-widget" className="container">
      <div className="posts-container ">
      {/* <% @posts.each do |post| %> */}
      <div className="card">
        <div className="card-body">
            {/* <h5 className='card-title'><%= post.title %></h5>
            <h6 className="card-subtitle mb-2 text-muted"><%= post.author %></h6>
            <p className="card-text"><%= post.short_description %></p>
            <%= link_to 'Read More..', post_path(post) %> */}
        </div>
      </div>
        {/* <% end %> */}
      </div>
    </div>
  </div>
</div>

);