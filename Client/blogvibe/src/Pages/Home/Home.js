import React from "react";
import { HomeBaner } from "./HomeBaner";
import { ContactForm } from "../ContactForm";
import { Fact } from "./Fact";
import { Content } from "./Content";
import { HeaderSlider } from "../../Components/Slider/HeaderSlider";
import { OurPopularUser } from "./OurPopularUser";
import { NewSlider } from "../../Components/Slider/NewSlider";
export const Home = () => {
  return (
    <div>
      <HomeBaner />
      <HeaderSlider />
      <Content />
      <Fact />
      {/* <OurPopularUser/> */}
      <NewSlider />
      <ContactForm />
    </div>
  );
};
