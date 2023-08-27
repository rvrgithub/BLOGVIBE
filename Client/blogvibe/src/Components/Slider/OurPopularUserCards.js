import React from "react";
// import "./user.css";
export const OurPopularUserCards = ({ cardDetails, imageData }) => {
  // console.log("imageData", imageData[0].img);
  const { name, email } = cardDetails;
  // console.log("testiMonialDetail" + cardDetails);
  console.log("namea", name, email);
  return (
    <div class="review_card">
      <div class="review_imgBox">
        <img
          class="review_img"
          alt="erorr"
          src={
            "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          }
        />
      </div>
      <div class="review_content">
        <h2>{name}</h2>
        <h3>{email}</h3>
        {/* <p>{"hbdhdfbjdfjdfjhdfjdfhddjdhdhdh"}</p> */}
      </div>
    </div>
  );
};
