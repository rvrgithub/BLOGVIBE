import React, { useState } from "react";
import "../Styles/contactus.css";
import { BsWhatsapp } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
export const ContactForm = () => {
  const [contactValue, setContactValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInput = (e) => {
    // console.log("e", e);
    const { name, value } = e.target;
    // console.log("name", name, value);
    setContactValue({ ...contactValue, [name]: value });
  };

  //   const contactme = (e) => {
  //     e.preventDefault();
  //     try {
  //       fetch(`${API_URL}/contactme`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           email,
  //           message,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.status == true) {
  //             alert(data.message);
  //             setName(" ");
  //             setEmail("");
  //             setMessage("");
  //           } else {
  //             alert(data.message);
  //           }
  //         });
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   };


  const handleSubmit =(e)=>{
    e.preventDefault();
  console.log("input value", contactValue);
  }
  return (
    <>
      <div style={{ height: "10vh" , marginTop:"0" }}></div>
      <div className="contact-page main">
        <h2>Get in touch</h2>
        <div className="contact-info">
          <div className="item">
            <i className="icon fas fa-home"></i>
            <AiOutlineHome />
            India
          </div>
          <div className="item">
            <BsWhatsapp />
            +91 1234567890
          </div>
          <div className="item">
            <AiOutlineMail />
            blogvibe@gmail.com
          </div>
          {/* <div className="item">
            <i className="icon fas fa-clock"></i>
            <BiTime />
            Mon - Fri 8:00 AM to 6:00 PM
          </div> */}
        </div>
        <form
          action=""
          className="contact-form"
        >
          <input
            type="text"
            className="textb"
            placeholder="Your Name"
            value={contactValue.name}
            name="name"
            onChange={(e) => handleInput(e)}
            required
          />
          <input
            type="email"
            className="textb"
            placeholder="Your Email"
            value={contactValue.email}
            name="email"
            onChange={(e) => handleInput(e)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={contactValue.message}
            name="message"
            onChange={(e) => handleInput(e)}
            required
          ></textarea>
          <input type="submit"  onClick={(e) => handleSubmit(e)} className="btn" value="Send" />
        </form>
      </div>
    </>
  );
};
