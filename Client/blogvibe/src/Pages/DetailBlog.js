import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiurl } from "../App";

export const DetailBlog = () => {
  const token = localStorage.getItem("Token");
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams();
  console.log("id", id);
  const hanldeData = () => {
    fetch(`${apiurl}/single/blog/${id}`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSingleData(data.singleBlog))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    hanldeData();
  }, []);
  console.log("singleData", singleData.image);
  return (
    <div
      className="container"
      style={{ marginTop: "100px", width: "100%", position: "absolute" }}
    >
      <div className="col-12">
        <div
          className="col-md-12"
          style={{ width: "100%", height: "300px", border: "1px solid red" }}
        >
          {/* <img
            className="img-fluid mb-4 mb-md-0"
            src="https://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg"
            style={{
              height: "200px !important",
            }}
            width={"100%"}
            // height={"50% !important" }
            alt="img_error"
          /> */}
          <img
            src={`${apiurl}/images/${singleData.image}`}
            style={{
              height: "200px !important",
            }}
            width={"100%"}
            // height={"50% !important" }
            alt="img_error"
          />
        </div>
        <div className="row">
          <p> {singleData.descriptions}</p>
        </div>
        <div className="row">
          <p> {singleData.title}</p>
        </div>
      </div>
    </div>
  );
};
