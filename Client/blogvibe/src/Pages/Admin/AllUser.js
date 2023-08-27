import React, { useEffect, useState } from "react";
import "../../Styles/allUser.css";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { apiurl } from "../../App";
import { BsJustify } from "react-icons/bs";

export const AllUser = () => {
  const [blogData, setBlogData] = useState([]);

  // const dataUser = [
  //   {
  //     name: "Bhagwan Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
  //   },
  //   {
  //     name: "Neeraj Singh",
  //     profile: "Jobsmart HR Solutions",
  //     img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
  //   },
  //   {
  //     name: "Bhagwan Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
  //   },
  //   {
  //     name: "Bhagwan Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
  //   },
  //   {
  //     name: "Neeraj Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
  //   },
  //   {
  //     name: "Bhagwan Singh",
  //     email: "aaaa@gamil.com",
  //     img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
  //   },
  // ];

  const getData = () => {
    fetch(`${apiurl}/getAll/user`)
      .then((res) => res.json())
      .then((data) => setBlogData(data.response))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();     
  }, []);
  console.log("blogData", blogData);

  return (
    <div className="allUser_container">
      {/* <div> */}
      <div>
        <h2>All Blog User Here ...</h2>
      </div>

      <div
        className="searchInput"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          className="search"
          id="search"
          type="search"
          placeholder="Search..."
          autofocus
          required
        />
        <button className="searchBtn" type="submit">
          Go
        </button>
      </div>

      {/* .................... */}
      {/* </div> */}
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col ">User Image</div>
          <div className="col ">User Name</div>
          <div className="col ">email Id</div>
          <div className="col ">Phone Number</div>
          <div className="col ">Delete</div>
        </li>
        {blogData?.map((el, index) => (
          <Link to={`/user/profile/${el._id}`}>
            <li className="table-row " key={index}>
              <div className="col col-1">
                <img
                  className="userImg"
                  src={
                    "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg"
                  }
                  width={"20px"}
                  height={"20px"}
                  alt="logo _error"
                />
                {/* <img src={`${apiurl}/images/${el.image}`} alt="" /> */}
              </div>
              <div className="col col-2" data-label=" Name">
                {el.name}{" "}
              </div>
              <div className="col col-3" data-label="Email Id">
                {el.email}
              </div>
              <div className="col col-3" data-label="Email Id">
                {el.phoneNumber ? el.phoneNumber : "No Number"}
              </div>
              <div className="col col-3" style={{ fontSize: "30px" }}>
                <AiFillDelete />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
