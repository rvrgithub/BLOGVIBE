import React from "react";
// import "./user.css";
export const OurPopularUserCards = ({ cardDetails }) => {
  const { name, company, description, img } = cardDetails;
//   console.log("testiMonialDetail" + cardDetails);
  return (
    <div class="review_card">
      <div class="review_imgBox">
        <img class="review_img" src={img} />
      </div>
      <div class="review_content">
        <h2>{name}</h2>
        <h3>{company}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
