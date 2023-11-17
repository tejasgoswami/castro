import React, { Component } from "react";

import Blog1 from "../../../assets/images/blog-1.jpeg"
import Blog2 from "../../../assets/images/blog-2.jpeg"
import Blog3 from "../../../assets/images/blog-3.jpeg"
import Blog5 from "../../../assets/images/blog-4.jpeg"
import Blog4 from "../../../assets/images/blog-5.jpeg"
import Blog6 from "../../../assets/images/blog-6.jpeg"
import Blog7 from "../../../assets/images/blog-7.jpeg"
import Blog8 from "../../../assets/images/blog-1.jpeg"
import Blog9 from "../../../assets/images/blog-2.jpeg"

const Blog = () => {

  const Data = [
    {
      title: "The ultimate fall 2020 shoe guide line",
      date: "May 11, 2020",
      author: "admin",
      comments: "03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog1
    },
    {
      title: "These hair-color trends are going to be huge.",
      date: "May 10, 2020",
      author: "admin",
      comments: "08",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog2
    }, {
      title: "Inspiration from the pre-fall collection.",
      date: "May 09, 2020",
      author: "admin",
      comments: "05",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog4
    }, {
      title: "City of london wants to have it's brexit cake.",
      date: "May 08, 2020",
      author: "admin",
      comments: "03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog5
    }, {
      title: "On the other hand we provide with righteous",
      date: "May 07, 2020",
      author: "admin",
      comments: "04",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog6
    }, {
      title: "The spectacle before us was indeed sublime",
      date: "May 06, 2020",
      author: "admin",
      comments: "05",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog7
    }, {
      title: "Why is a tickets to logo so expensive?",
      date: "May 05, 2020",
      author: "admin",
      comments: "03",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog8
    }, {
      title: "But i must explain to you how all this mistaken idea.",
      date: "May 04, 2020",
      author: "admin",
      comments: "08",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog9
    }, {
      title: "The Biebers just Switched Up Their Couple Style",
      date: "May 03, 2020",
      author: "admin",
      comments: "05",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
      imageUrl: Blog3
    },

  ];

  const renderTax = () => {
    return Data.map((data) => {
      return (
        <CardData data={data} />
      )
    })
  }
  return (
    <div className="items-container row clearfix">
        {renderTax()}
    </div>
  );
}

export default Blog;


const CardData = (props) => {
  const { data } = props;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 shop-block masonry-item small-column best_seller new_arraivals top_rate">
      <div className="shop-block-one">
        <div className="inner-box">
          <figure className="image-box">
            <img src={data.imageUrl} alt="" />
          </figure>
          <div className="lower-content">
            <span>- {data.date}</span>
            <div>{data.title}</div>
            <div><span>by {data.author}</span> | <span>{data.comments} Comments</span></div>
            <div>{data.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}