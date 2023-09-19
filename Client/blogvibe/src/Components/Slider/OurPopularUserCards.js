import React from "react";
import { apiurl } from "../../App";
import { Link } from "react-router-dom";
// import "./user.css";
export const OurPopularUserCards = ({ cardDetails }) => {
  // console.log("imageData", imageData[0].img);
  const { _id,name, email, profileImage } = cardDetails;
  return (
    <div className="review_card">
      <Link to={`/user/profile/${_id}`}>
        <div className="review_imgBox">
          <img
            className="review_img"
            alt="erorr"
            src={`${apiurl}/images/${profileImage}`}
          />
        </div>
        <div className="review_content">
          <h2>{name}</h2>
          <h3>{email}</h3>
          {/* <p>{"hbdhdfbjdfjdfjhdfjdfhddjdhdhdh"}</p> */}
        </div>
      </Link>
    </div>
  );
};
