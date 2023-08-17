import React from 'react'
import { HomeBaner } from './HomeBaner'
import { ContactForm } from '../ContactForm'
import { Fact } from './Fact';
// import {HeaderSlider} from "../../Components/Slider/HeaderSlider"
export const Home = () => {
  return (
    <div>
      <HomeBaner />
      {/* <HeaderSlider/> */}
      <Fact/>
      <ContactForm />
    </div>
  );
}
