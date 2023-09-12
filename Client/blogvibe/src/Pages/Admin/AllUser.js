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
    <>
    
    
    
    {/* ............................................. */}
   
    {/* <div className="container">
      <table className="responsive-table">
        <thead className="responsive-table__head">
          <tr className="responsive-table__row">
            <th className="responsive-table__head__title responsive-table__head__title--name">Name
              <svg version="1.1" className="up-arrow" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                <path d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285    c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z" />
              </svg>
            </th>
            <th className="responsive-table__head__title responsive-table__head__title--status">Status</th>
            <th className="responsive-table__head__title responsive-table__head__title--types">Types</th>
            <th className="responsive-table__head__title responsive-table__head__title--update">Last updated at</th>
            <th className="responsive-table__head__title responsive-table__head__title--country">Country</th>
          </tr>
        </thead>
        <tbody className="responsive-table__body">
          <tr className="responsive-table__row">
            <td className="responsive-table__body__text responsive-table__body__text--name">
              <svg className="user-icon" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                <path d="m256.025 483.334 101.429-25.614c57.895-48.074 94.771-120.586 94.771-201.719 0-125.144-87.711-229.801-205.012-255.852-137.316 4.631-247.213 117.407-247.213 255.851 0 71.112 29 135.446 75.812 181.836z" fill="#cbe2ff" />
                <path d="m446.914 256c0 83.915-40.381 158.391-102.765 205.079l92.031-23.241c46.815-46.39 75.82-110.724 75.82-181.838 0-141.385-114.615-256-256-256-11.024 0-21.886.698-32.543 2.05 126.019 15.988 223.457 123.59 223.457 253.95z" fill="#bed8fb" />
                <path d="m319.621 96.952c0-13.075-10.599-23.674-23.674-23.674h-81.582c-30.091 0-54.485 24.394-54.485 54.485v60.493h192.209v-59.635c0-13.075-10.599-23.674-23.674-23.674h-.798c-4.416 0-7.996-3.579-7.996-7.995z" fill="#365e7d" />
                <path d="m328.415 104.947h-.798c-4.416 0-7.996-3.58-7.996-7.996v-.798c0-13.075-10.599-23.674-23.674-23.674h-81.582c-13.075 0-23.674 10.599-23.674 23.674v.798c0 4.416-3.58 7.996-7.996 7.996h-1.196c-2.49 0-4.854.965-6.652 2.762-1.798 1.798-2.763 4.162-2.763 6.652v60.493c0 3.819 1.488 7.423 4.191 10.124 2.701 2.702 6.305 4.191 10.124 4.191h192.209c4.416 0 7.996-3.58 7.996-7.996v-59.635c0-13.074-10.599-23.674-23.674-23.674zm-81.582 0c-13.075 0-23.674 10.599-23.674 23.674v.798c0 4.416-3.579 7.996-7.996 7.996h-1.196c-2.49 0-4.854.965-6.652 2.762-1.798 1.798-2.763 4.162-2.763 6.652v60.493c0 3.819 1.488 7.423 4.191 10.124 2.702 2.702 6.305 4.191 10.124 4.191h192.209c4.416 0 7.996-3.579 7.996-7.996v-59.635c0-13.075-10.599-23.674-23.674-23.674h-81.582z" fill="#2e4a61" />
                <path d="m192.209 212.072v-59.635c0-13.075-10.599-23.674-23.674-23.674h-81.582c-13.075 0-23.674 10.599-23.674 23.674v60.493h128.93z" fill="#213647" />
                <g fill="#f76d57">
                  <path d="m271.477 283.641-11.562 15.635h-24.632v-20.713l16.715-22.616c1.685-2.281 4.208-3.607 6.901-3.607s5.216 1.326 6.901 3.607l16.715 22.616z" />
                  <path d="m224 369.736h64v24.638h-64z" />
                </g>
                <path d="m288 106.33c-8.284 0-15-6.716-15-15v-19.115c0-8.284 6.716-15 15-15s15 6.716 15 15v19.115c0 8.284-6.716 15-15 15z" fill="#e6644d" />
                <g fill="#365e7d">
                  <path d="m268.995 307.734c-2.775 0-5.547-1.057-7.694-3.204-3.991-3.99-3.991-10.472 0-14.462l28.546-28.546c1.074-1.074 2.5-1.586 3.927-1.586 1.427 0 2.853.512 3.927 1.586 2.147 2.147 2.147 5.919 0 8.066l-28.546 28.546c-1.446 1.446-3.338 2.207-5.385 2.207z" />
                  <path d="m243.696 285.697c-8.141 0-16.223-3.104-22.399-9.28-12.365-12.366-12.365-32.374 0-44.74l28.545-28.546c1.075-1.075 2.5-1.586 3.927-1.586 1.426 0 2.852.511 3.927 1.586 12.366 12.365 12.366 32.374 0 44.74-6.176 6.175-14.258 9.279-22.399 9.279z" />
                </g>
              </svg>
              <span className="responsive-table__body__text__inner">John Doe</span>
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--status">
              <span className="responsive-table__body__text__inner">Active</span>
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--types">
              <span className="responsive-table__body__text__inner">Admin</span>
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--update">
              <span className="responsive-table__body__text__inner">2021-09-12 15:24:00</span>
            </td>
            <td className="responsive-table__body__text responsive-table__body__text--country">
              <span className="responsive-table__body__text__inner">United States</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div> */}


{/* // ............................................. */}
    
    <div className="allUser_container">
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
    </>
  );
};
