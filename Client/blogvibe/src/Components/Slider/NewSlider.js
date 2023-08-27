import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./user.css";
import { OurPopularUserCards } from "./OurPopularUserCards";
import { useEffect, useState } from "react";
import { apiurl } from "../../App";
export const NewSlider = () => {
  const [userData, setUserData] = useState([]);

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

  const getAllUser = () => {
    fetch(`${apiurl}/getAll/user`)
      .then((res) => res.json())
      .then((data) => setUserData(data.response))
      .catch((error) => console.log("error", error));
  };

  console.log("userdata", userData);
  useEffect(() => {
    getAllUser();
  }, []);

  console.log("cardDetails", cardDetails[0].img)
  return (
    <div id="customer-testimonoals">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={5}
        centeredSlides={true}
        autoHeight={true}
        navigation={{
          prevEl: "",
          nextEl: "",
        }}
        pagination={{
          clickable: true,
        }}
        // freeMode={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 32,
            // slidesPerGroup: 1,
          },
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=" mySwiper"
        loop={true}
      >
        {userData?.map((cardDetails, index) => {
          return (
            <SwiperSlide key={cardDetails.key}>
              <OurPopularUserCards cardDetails={cardDetails} imageData={cardDetails[index]} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
