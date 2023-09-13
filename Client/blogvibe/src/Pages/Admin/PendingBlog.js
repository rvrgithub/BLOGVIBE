import React, { useEffect, useState } from "react";
import "../../Styles/allBlog.css";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { apiurl } from "../../App";
// import { apiurl } from "../App";

export const PendingBlog = () => {
  const Token = localStorage.getItem("Token");
  console.log("token", Token);
  const [blogData, setBlogData] = useState([]);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const getData = () => {
    fetch(`${apiurl}/admin/pending/blog`)
      .then((res) => res.json())
      .then((data) => setBlogData(data.response))
      .catch((error) => console.log("error", error));
  };

  const handleStatus = (id) => {
    console.log("id", id);
    fetch(`${apiurl}/admin/approve/${id._id} `, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => getData())
      .catch((error) => console.log("error", error));
  };
  // ..........  delete function ..............
  const handleDelete = (e) => {
    console.log("e", e._id);
    fetch(`${apiurl}/delete/blog/${e._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => getData())
      .catch((error) => console.log("error", error));
    alert("Success: Your Blog Post Has Been Deleted!");
  };

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
  console.log("blogData", blogData);
  return (
    <>
      {!blogData?.length == 0 ? (
        <div
          class="row d-flex justify-content-center"
          style={{ marginTop: "100px" }}
        >
          <div class="col-md-8 col-lg-6">
            <div
              class="card shadow-0 border"
              style={{ backgroundColor: "#f0f2f5" }}
            >
              <div class="card-body p-4">
                {blogData.map((el) => (
                  // <Link to={`/detail/Blog/${el._id}`} className="link">
                  <div class="card mb-4">
                    <div class="card-body">
                      <p style={{ fontSize: "21px" }}>
                        {truncate(capitalizeFirstLetter(el.title), 15)}
                      </p>
                      <p style={{ fontSize: "19px" }}>
                       
                        {truncate(capitalizeFirstLetter(el.descriptions), 20)}
                      </p>
                      <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                            alt="avatar"
                            width="25"
                            height="25"
                          />
                          <p class="small mb-0 ms-2">Name</p>
                        </div>
                        {/* <div class="d-flex flex-row align-items-center"> */}
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => handleStatus(el)}
                        >
                          Approve?
                        </button>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                  // </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="emptyImage">
          <img src="https://media.tenor.com/_u06pCtKHVkAAAAj/content-box.gif" />
        </div>
      )}
    </>
  );
};
