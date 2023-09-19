import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiurl } from "../App";
import "../Styles/write_blog.css";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

export const DetailBlog = () => {
  const token = localStorage.getItem("Token");
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();
  // console.log("id", id);
  const hanldeData = () => {
    fetch(`${apiurl}/single/blog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setSingleData(data.singleBlog))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    hanldeData();
  }, []);
  // console.log("singleData", singleData);
  return (
    <div className="container" style={{ marginTop: "100px", width: "100%" }}>
      <h1 className="detailTitle">{singleData.title}</h1>
      <div className="col-12 detailDiv">
        <img
          className="img-fluid "
          src={`${apiurl}/images/${singleData.image}`}
          style={{}}
          alt="img_error"
        />
      </div>
      <div className="row mt-5">
        <p className="detailDesc"> {singleData.descriptions}</p>
      </div>

      <div className="DetailFeedback card ">
        {/* <div className=" card-body"> */}
          <p className="">
            <BiSolidQuoteAltLeft /> {"  "} We value your thoughts and opinions!
            If you have any suggestions, questions, or ideas on how we can
            improve your experience on our blog, please don't hesitate to reach
            out. Your feedback is incredibly important to us. {"  "}
            <BiSolidQuoteAltRight />
          </p>
        {/* </div> */}
        <div className="detailsUser">
          <img src="https://w7.pngwing.com/pngs/886/300/png-transparent-user-other-furniture-child-thumbnail.png" />
          <div>
            <p>Radhika Verma</p>
            <p>RV@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
