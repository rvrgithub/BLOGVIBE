import React, { useEffect, useState } from "react";
import "../../Styles/allUser.css";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { apiurl } from "../../App";
import { BsJustify } from "react-icons/bs";
import { useTheme } from "styled-components";

export function AllUser() {
  const [blogData, setBlogData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const Token = localStorage.getItem("Token");

  const [search, setSearch] = useState();

  // console.log("token", Token);
  const getData = () => {
    fetch(`${apiurl}/getAll/user`)
      .then((res) => res.json())
      .then((data) => setBlogData(data.response))
      .catch((error) => alert("error", error));
  };
  const deleteUser = (id) => {
    // console.log("id", id);
    fetch(`${apiurl}/admin/delete/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        getData();
      });
  };

  const searchInput = (e) => {
    // console.log("searchInput", e);
    // console.log("input in search ", inputValue);
    const filteredData = blogData.filter((item) => item.name === inputValue);
    setSearch([...filteredData]);
    // console.log("filteredData", filteredData);
  };

  // console.log("blogData", blogData);

  useEffect(() => {
    getData();
  }, []);

  // .................... capitalizeFirstLetter  ..........................
  function capitalizeFirstLetter(text) {
    // Check if the input text is empty or null
    if (!text) {
      return "";
    }

    // Convert the first letter to uppercase and the rest to lowercase
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        {/* <div className="row">
          <div className="col-lg-10 mx-auto mb-4">
            <div className="section-title text-center ">
              <h3 className="top-c-sep">Grow your career with us</h3>
              <p>
                Lorem ipsum dolor sit detudzdae amet, rcquisc adipiscing elit.
                Aenean socada commodo ligaui egets dolor. Nullam quis ante tiam
                sit ame orci eget erovtiu faucid.
              </p>
            </div>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="career-search mb-60">
              <form action="#" className="career-form mb-60">
                <div className="row">
                  <div className="col-md-6 col-lg-6 my-3">
                    <div className="input-group position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Keywords"
                        id="keywords"
                        name="input"
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-6 my-3">
                    <button
                      type="button"
                      className="btn btn-lg btn-block btn-light btn-custom"
                      id="contact-submit"
                      onClick={() => {
                        searchInput();
                      }}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>

              <div className="filter-result">
                {!search
                  ? blogData?.map((el, index) => (
                      <div className="job-box d-md-flex align-items-center justify-content-between mb-30" key={index} >
                        <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                          <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                            {/* {capitalizeFirstLetter(el.name)} */}
                            <img
                              src={`${apiurl}/images/${el.profileImage}`}
                              className="userImage"
                            />
                          </div>
                        </div>
                        <div className="job-content">
                          <h5 className="text-center text-md-left">
                            {" "}
                            {capitalizeFirstLetter(el.name)}
                          </h5>
                        </div>
                        <div className="job-content">
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-pin mr-2 "></i> {el.email}
                            </li>
                          </ul>
                        </div>

                        <div className="job-content">
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-money mr-2 "></i>{" "}
                              {el.phoneNumber}
                            </li>
                          </ul>
                        </div>
                        <Link to={`/user/profile/${el._id}`} >
                          <div className="job-right my-4 flex-shrink-0">
                            <div
                              href="#"
                              className="btn d-block w-100 d-sm-inline-block btn-light"
                            >
                              Profile
                            </div>
                          </div>
                        </Link>
                        <div className="job-right my-4 flex-shrink-0">
                          <a
                            href="#"
                            className="btn d-block w-100 d-sm-inline-block btn-light"
                            onClick={() => deleteUser(el._id)}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    ))
                  : search?.map((el, index) => (
                      <div className="job-box d-md-flex align-items-center justify-content-between mb-30" key={index}>
                        <div className="job-left my-4 d-md-flex align-items-center flex-wrap">
                          <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                            {/* {capitalizeFirstLetter(el.name)} */}
                            <img
                              src={`${apiurl}/images/${el.profileImage}`}
                              className="userImage"
                            />
                          </div>
                        </div>
                        <div className="job-content">
                          <h5 className="text-center text-md-left">
                            {" "}
                            {capitalizeFirstLetter(el.name)}
                          </h5>
                        </div>
                        <div className="job-content">
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-pin mr-2 "></i> {el.email}
                            </li>
                          </ul>
                        </div>

                        <div className="job-content">
                          <ul className="d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li className="mr-md-4">
                              <i className="zmdi zmdi-money mr-2 "></i>{" "}
                              {el.phoneNumber}
                            </li>
                          </ul>
                        </div>
                        <Link to={`/user/profile/${el._id}`} key={index}>
                          <div className="job-right my-4 flex-shrink-0">
                            <div
                            
                              className="btn d-block w-100 d-sm-inline-block btn-light"
                            >
                              Profile
                            </div>
                          </div>
                        </Link>
                        <div className="job-right my-4 flex-shrink-0">
                          <a
                            href="#"
                            className="btn d-block w-100 d-sm-inline-block btn-light"
                            onClick={() => deleteUser(el._id)}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    ))}
              </div>
            </div>

            {/* <!-- START Pagination --> */}
            {/* <nav aria-label="Page navigation">
              <ul className="pagination pagination-reset justify-content-center">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <i className="zmdi zmdi-long-arrow-left"></i>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item d-none d-md-inline-block">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item d-none d-md-inline-block">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    8
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="zmdi zmdi-long-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </nav> */}
            {/* <!-- END Pagination --> */}
          </div>
        </div>
      </div>
    </>
  );
}
