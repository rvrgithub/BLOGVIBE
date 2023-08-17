
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import {  Pagination } from 'swiper';
// import SwiperCore, { Autoplay } from 'swiper';
export const HeaderSlider = () => {
  return (
    <>
      <section class="services">
        <div class="container">
          <div className="upcommingBlogContainer">
            {/* <h2>Upcommming Blogs</h2> */}

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
              // navigation={{
              //   prevEl: ".swiper-button-prev",
              //   nextEl: ".swiper-button-next",
              // }}
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
              className="mySwiper blogSlider"
            >
              <SwiperSlide>
                <div class="item">
                  <div class="icon">
                    <img
                      // src="\assets\image\service-icon-01.png"
                      alt="adjasnd"
                    />
                  </div>
                  <div class="down-content">
                    <h4>Best Education</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="icon">
                    <img
                      // src="\assets\image\service-icon-03.png"
                      alt="adjasnd"
                    />
                  </div>
                  <div class="down-content">
                    <h4>Best Education-3</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="icon">
                    <img
                      // src="\assets\image\service-icon-03.png"
                      alt="adjasnd"
                    />
                  </div>
                  <div class="down-content">
                    <h4>Best Education-2</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="item">
                  <div class="icon">
                    <img
                      // src="\assets\image\service-icon-03.png"
                      alt="adjasnd"
                    />
                  </div>
                  <div class="down-content">
                    <h4>Best Education-2</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div class="item">
                  <div class="icon">
                    <img
                      // src="\assets\image\service-icon-03.png"
                      alt="adjasnd"
                    />
                  </div>
                  <div class="down-content">
                    <h4>Best Education-2</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
