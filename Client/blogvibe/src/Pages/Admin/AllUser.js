import React from "react";
import "../../Styles/allUser.css";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
export const AllUser = () => {
  const dataUser = [
    {
      name: "Bhagwan Singh",
      email: "aaaa@gamil.com",
      img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
    },
    {
      name: "Neeraj Singh",
      profile: "Jobsmart HR Solutions",
      img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
    },
    {
      name: "Bhagwan Singh",
      email: "aaaa@gamil.com",
      img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
    },
    {
      name: "Bhagwan Singh",
      email: "aaaa@gamil.com",
      img: "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
    },
    {
      name: "Neeraj Singh",
      email: "aaaa@gamil.com",
      img: "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
    },
    {
      name: "Bhagwan Singh",
      email: "aaaa@gamil.com",
      img: "https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
    },
  ];
  return (
    <div className="allUser_container">
      <h2>All Blog User Here ...</h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">User Name</div>
          <div className="col col-2">User Image</div>
          <div className="col col-3">email Id</div>
          <div className="col col-4">Phone Number</div>
          <div className="col col-5">Delete</div>
        </li>
        {dataUser?.map((el, index) => (
          <Link to="/profile">
          <li className="table-row "  key={index}>
         
            <div className="col col-1" >
              <img className="userImg" src={el.img} width={"20px"} height={"30px"} alt="logo _error" />
            </div>
            <div className="col col-2" data-label=" Name">{el.name} </div>
            <div className="col col-3" data-label="Email Id">
         {el.email}
            </div>
            <div className="col col-4">
              <AiFillDelete/>
            </div>
            
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
