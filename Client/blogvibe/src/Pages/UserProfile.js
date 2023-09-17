import React, { useEffect, useState } from "react";
import "../Styles/profile.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { apiurl } from "../App";

export const UserProfile = () => {
  const [getUser, setGetUser] = useState("");
  const [getBlog, setGetBlog] = useState([]);
  const { id } = useParams();

  const getDataById = () => {
    fetch(`${apiurl}/sinlgeUser/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setGetBlog(data.response))
      .catch((error) => console.log("error", error));
  };
  console.log("getBlog", getBlog);
  const getSngleUSerByd = () => {
    fetch(`${apiurl}/single/uesr/${id}`)
      .then((res) => res.json())
      .then((data) => setGetUser(data.response))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getDataById();
    getSngleUSerByd();
  }, []);
  console.log("id", id);
  console.log("udar Data", getUser);

  return (
    <div className="wrapper">
      <div className="sidebar" style={{ height: "62.8vh",marginTop:"10px" }}>
        <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
          <img
            className="mx-auto d-block w-75 h-10 bg-primary img-fluid rounded-circle mb-4 p-3"
            src="https://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg"
            alt="img_error"
          />
          <h1 className="font-weight-bold">_{getUser?.name}</h1>
          <p className="mb-1">
            <p>{getUser.email}</p>
            {/* Justo stet no accusam stet invidunt sanctus magna clita vero eirmod,
            sit sit labore dolores lorem. Lorem at sit dolor dolores sed diam
            justo */}
          </p>
          <div className="d-flex justify-content-center mb-3">
            <li
              className="btn btn-outline-primary mr-2"
              style={{ fontSize: "20px" }}
            >
              <BsFacebook />
            </li>
            <li
              className="btn btn-outline-primary mr-2"
              style={{ fontSize: "20px" }}
            >
              <AiFillInstagram />
            </li>
            <li
              className="btn btn-outline-primary mr-2"
              style={{ fontSize: "20px" }}
            >
              <AiFillLinkedin />
            </li>
            <li
              className="btn btn-outline-primary mr-2"
              style={{ fontSize: "20px" }}
            >
              <IoLogoWhatsapp />
            </li>
          </div>
          {/* <li className="btn btn-lg btn-block btn-primary mt-10px">
            Fowllow Me
          </li> */}
        </div>
        <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
          <i className="fas fa-2x fa-angle-double-right text-primary"></i>
        </div>
      </div>
      <div className="content example1">
        {/* <!-- Blog List Start --> */}
        <div
          className="container bg-white pt-1  newBox"
          style={{ height: "55vh", overflowX: "hidden" }}
        >
          {getBlog?.map((el, index) => (
            <div className="row blog-item px-3 pb-2 pro_box" key={index}>
              <div className="col-md-5 ">
                {/* <img
                  className="img-fluid mb-4 mb-md-0"
                  src="https://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg"
                  alt="img_error"
                /> */}
                <img
                  className="img-fluid mb-4 mb-md-0 user_pro_img"
                  src={`${apiurl}/images/${el.image}`}
                  alt="error"
                  style={{height:"500px !important"}}
                />
              </div>
              <div className="col-md-7">
                <h3 className="mt-md-4 px-md-3 mb-2 py-2 bg-white font-weight-bold">
                  {el.title}
                </h3>
                <div className="d-flex mb-3">
                  <small className="mr-2 text-muted">
                    <i className="fa fa-calendar-alt"></i> {el.title}
                  </small>
                  <small className="mr-2 text-muted">
                    <i className="fa fa-folder"></i> Web Design
                  </small>
                  <small className="mr-2 text-muted">
                    <i className="fa fa-comments"></i> 15 Comments
                  </small>
                </div>
                <p>{el.decription}</p>
                <Link
                  className="btn btn-link p-0"
                  to={`/detail/Blog/${el._id}`}
                >
                  Read More{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
