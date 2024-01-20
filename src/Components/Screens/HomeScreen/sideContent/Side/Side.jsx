import React from "react";
import Slider from "react-slick";
import { gallery } from "../../../../../dummyData";
import Heading from "../../../../Common/Heading/Heading";
import SocialMedia from "../Social/SocialMedia";
import Tpost from "../Tpost/Tpost";
import "./Side.css";

const Side = () => {
  const category = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technology",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />
      <Heading title="Subscribe" />

      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section>

      <section className="banner">
        <img src="./images/sidebar-banner-new.jpg" alt="" />
      </section>

      <Tpost />

      <section className="catgorys">
        <Heading title="Categories" />
        {category.map((val) => {
          return (
            <div className="category category1">
              <span>{val}</span>
            </div>
          );
        })}
      </section>

      <section className="gallery">
        <Heading title="Gallery" />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Side;
