import React from "react";
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

const cardData = [
  {
    image:
      "https://logo.com/image-cdn/images/kts928pd/production/28563b4f836c667b30238865f796aeb03ae702db-358x357.png?w=1080&q=72",
    title: "Featured Blog Posts",
    content:
      "Display the title of the blog post and a brief description or teaser to entice users to click",
  },
  {
    image:
      "https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web.jpg",
    title: "Author Profiles",
    content:
      " Show the author's name, a short bio, and their expertise or interests",
  },
  ,
  {
    image:
      "https://images-platform.99static.com//5izzx5mICDKM8GVjq-fDbXrLqyU=/482x1354:1119x1991/fit-in/500x500/99designs-contests-attachments/124/124405/attachment_124405286",
    title: "Product or Service Highlights",
    content:
      "Provide a product or service name, key features, and a call to action."
  },
  ,
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/008/322/695/non_2x/testimonials-feedback-set-icon-symbol-template-for-graphic-and-web-design-collection-logo-illustration-vector.jpg",
    title: "User Testimonials",
    content:
      "Share short testimonials highlighting the benefits of your blog or services",
  },
  ,
  {
    image:
      "https://media.istockphoto.com/id/944286110/vector/vector-logo-globe.jpg?s=1024x1024&w=is&k=20&c=GI9qQsi22FPABPvi47W4mPfgh58NOGM63bHLvHS3eD0=",
    title: "Featured Categories or Topics:",
    content: "Display category names or topic titles",
  },
  ,
  {
    image:
      "https://i.pinimg.com/474x/87/95/61/879561dcca724801ef8245d4b609aeab.jpg",
    title: "Quotes or Inspiration",
    content:
      "Share inspirational quotes, tips, or snippets from your blog content.",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/megaphone-with-get-it-now-speech-bubble-banner-loudspeaker-label-business-marketing-advertising-vector-isolated-background-eps-10_399089-2664.jpg",
    title: "Upcoming Events or Webinars",
    content: "Event titles, dates, and registration information.",
  },
];
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
              {cardData?.map((el, index) => (
                <SwiperSlide>
                  <div className="swiper_div" key={index}>
                    <div className="icon">
                      <img
                        className="switper_img"
                        src={el.image}
                        alt="adjasnd"
                      />
                    </div>
                    <div className="down-content">
                      <h4 style={{ color: "orange", marginTop: "10px" }}>
                        {el.title}
                      </h4>
                      <h6 style={{ color: "#f0fbff" }}>{el.content}</h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
