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

  const[search,setSearch]=useState()

  // console.log("token", Token);
  const getData = () => {
    fetch(`${apiurl}/getAll/user`)
      .then((res) => res.json())
      .then((data) => setBlogData(data.response))
      .catch((error) => console.log("error", error));
  };
  const deleteUser = (id) => {
    console.log("id", id);
    fetch(`${apiurl}/admin/delete/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {console.log("data", data)
    getData()});
  };

  const searchInput = (e) => {
    // console.log("searchInput", e);
    // console.log("input in search ", inputValue);
    const filteredData = blogData.filter((item) => item.name === inputValue);
    setSearch([...filteredData])
    console.log("filteredData", filteredData);
  };

  console.log("blogData", blogData);

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
      <div class="container" style={{ marginTop: "100px" }}>
        {/* <div class="row">
          <div class="col-lg-10 mx-auto mb-4">
            <div class="section-title text-center ">
              <h3 class="top-c-sep">Grow your career with us</h3>
              <p>
                Lorem ipsum dolor sit detudzdae amet, rcquisc adipiscing elit.
                Aenean socada commodo ligaui egets dolor. Nullam quis ante tiam
                sit ame orci eget erovtiu faucid.
              </p>
            </div>
          </div>
        </div> */}

        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="career-search mb-60">
              <form action="#" class="career-form mb-60">
                <div class="row">
                  <div class="col-md-6 col-lg-6 my-3">
                    <div class="input-group position-relative">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Keywords"
                        id="keywords"
                        name="input"
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="col-md-6 col-lg-6 my-3">
                    <button
                      type="button"
                      class="btn btn-lg btn-block btn-light btn-custom"
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

              <div class="filter-result">
                {!search
                  ? blogData?.map((el, index) => (
                      <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                        <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                          <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                            {/* {capitalizeFirstLetter(el.name)} */}
                            <img
                              src="https://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg"
                              className="userImage"
                            />
                          </div>
                        </div>
                        <div class="job-content">
                          <h5 class="text-center text-md-left">
                            {" "}
                            {capitalizeFirstLetter(el.name)}
                          </h5>
                        </div>
                        <div class="job-content">
                          <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li class="mr-md-4">
                              <i class="zmdi zmdi-pin mr-2 "></i> {el.email}
                            </li>
                          </ul>
                        </div>

                        <div class="job-content">
                          <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li class="mr-md-4">
                              <i class="zmdi zmdi-money mr-2 "></i>{" "}
                              {el.phoneNumber}
                            </li>
                          </ul>
                        </div>
                        <Link to={`/user/profile/${el._id}`} key={index}>
                          <div class="job-right my-4 flex-shrink-0">
                            <a
                              href="#"
                              class="btn d-block w-100 d-sm-inline-block btn-light"
                            >
                              Profile
                            </a>
                          </div>
                        </Link>
                        <div class="job-right my-4 flex-shrink-0">
                          <a
                            href="#"
                            class="btn d-block w-100 d-sm-inline-block btn-light"
                            onClick={() => deleteUser(el._id)}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    ))
                  : search?.map((el, index) => (
                      <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                        <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                          <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                            {/* {capitalizeFirstLetter(el.name)} */}
                            <img
                              src="https://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg"
                              className="userImage"
                            />
                          </div>
                        </div>
                        <div class="job-content">
                          <h5 class="text-center text-md-left">
                            {" "}
                            {capitalizeFirstLetter(el.name)}
                          </h5>
                        </div>
                        <div class="job-content">
                          <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li class="mr-md-4">
                              <i class="zmdi zmdi-pin mr-2 "></i> {el.email}
                            </li>
                          </ul>
                        </div>

                        <div class="job-content">
                          <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans">
                            <li class="mr-md-4">
                              <i class="zmdi zmdi-money mr-2 "></i>{" "}
                              {el.phoneNumber}
                            </li>
                          </ul>
                        </div>
                        <Link to={`/user/profile/${el._id}`} key={index}>
                          <div class="job-right my-4 flex-shrink-0">
                            <a
                              href="#"
                              class="btn d-block w-100 d-sm-inline-block btn-light"
                            >
                              Profile
                            </a>
                          </div>
                        </Link>
                        <div class="job-right my-4 flex-shrink-0">
                          <a
                            href="#"
                            class="btn d-block w-100 d-sm-inline-block btn-light"
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
              <ul class="pagination pagination-reset justify-content-center">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <i class="zmdi zmdi-long-arrow-left"></i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item d-none d-md-inline-block">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item d-none d-md-inline-block">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    8
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <i class="zmdi zmdi-long-arrow-right"></i>
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
