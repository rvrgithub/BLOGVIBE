import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
export const HeaderSlider = () => {
  return (
    <>
      <section className="services">
        <div className="container">
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
                <div className="swiper_div">
                  <div className="icon">
                    <img
                      className="switper_img"
                      // src="\assets\image\service-icon-01.png"
                      alt="adjasnd"
                    />
                  </div>
                  <div className="down-content">
                    <h4>Best Education</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_div">
                  <div className="icon">
                    <img
                      className="switper_img"
                      // src="\assets\image\service-icon-03.png"
                      alt="adjasnd"
                    />
                  </div>
                  <div className="down-content">
                    <h4>Best Education-3</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_div">
                  <div className="icon">
                    <img
                      className="switper_img"
                      // src="\assets\image\service-icon-03.png"
                      alt="adjasnd"
                    />
                  </div>
                  <div className="down-content">
                    <h4>Best Education-2</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper_div">
                  <div className="icon">
                    <img
                      className="switper_img"
                      src="https://img.freepik.com/premium-vector/creative-hand-chinese-coin-shape-abstract-logo-design_695965-4.jpg?w=2000"
                      alt="adjasnd"
                    />
                  </div>
                  <div className="down-content">
                    <h4>Best Education-2</h4>
                    <p>
                      Suspendisse tempor mauris a sem elementum bibendum.
                      Praesent facilisis massa non vestibulum.
                    </p>
                  </div>
                </div>
              </SwiperSlide>{" "}
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
