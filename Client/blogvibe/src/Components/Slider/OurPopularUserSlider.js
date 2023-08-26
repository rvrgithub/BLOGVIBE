import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import "./user.css";
import { OurPopularUserCards } from "./OurPopularUserCards";
import { apiurl } from "../../App";

export const OurPopularUserSlider = () => {
  const cardDetails = [
    {
      name: "Bhagwan Singh",
      profile: "Goodwill homz",
      img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
    },
    {
      name: "Neeraj Singh",
      profile: "Jobsmart HR Solutions",
      img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
    },
    {
      name: "Bhagwan Singh",
      profile: "Syndicate Realtors",
      img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
    },
    {
      name: "Bhagwan Singh",
      profile: "Goodwill homz",
      img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
    },
    {
      name: "Neeraj Singh",
      profile: "Jobsmart HR Solutions",
      img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
    },
    {
      name: "Bhagwan Singh",
      profile: "Syndicate Realtors",
      img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
    },
  ];



  // console.log("cardedails", cardDetails);
  return (
    <>
      <div className="row">
        <div className="col-md-12-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            centeredSlides={true}
            autoHeight={true}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                // slidesPerGroup: 1,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper "
            id="customer-testimonoals"
            className=" owl-carousel owl-theme mySwiper"
          >
            {/* {cardDetails?.map((cardDetails) => {
              return (
                <SwiperSlide key={cardDetails.key}>
                  <OurPopularUserCards cardDetails={cardDetails} />
                </SwiperSlide>
              );
            })} */}
            <SwiperSlide>
              <div class="review_card">
                <div class="review_imgBox">
                  <img
                    class="review_img"
                    src={
                      "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                    }
                  />
                </div>
                <div class="review_content">
                  <h2>name</h2>
                  <h3>company</h3>
                  <p>description</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_div">
                <div className="icon">
                  <img
                    className="switper_img"
                    src="https://w7.pngwing.com/pngs/80/950/png-transparent-computer-icons-foodie-blog-categories-miscellaneous-food-logo.png"
                    alt="adjasnd"
                  />
                </div>
                <div className="down-content">
                  <h4>Best Education-last</h4>
                  <p>
                    Suspendisse tempor mauris a sem elementum bibendum. Praesent
                    facilisis massa non vestibulum.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
