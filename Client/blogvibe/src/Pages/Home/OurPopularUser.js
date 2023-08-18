import React from "react";
import "../../Styles/ourPopularUser.css";
import { OurPopularUserSlider } from "../../Components/Slider/OurPopularUserSlider";
export const OurPopularUser = () => {
  return (
    <section className="our-courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Popular User. ... . . . .</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <OurPopularUserSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
