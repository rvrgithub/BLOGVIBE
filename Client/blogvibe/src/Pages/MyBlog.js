import React, { useEffect, useState } from "react";
import { apiurl } from "../App";

import { FaEdit, FaEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Display } from "../Components/modal/Modal";
import { format } from "timeago.js";
export const MyBlog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setVlaue] = useState("");

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const token = localStorage.getItem("Token");
  // console.log("token", token);
  const [myblog, setMyblog] = useState([]);
  let getBlogApi;
  let role = localStorage.getItem("role");
  if (role === "user") {
    getBlogApi = "getself/blog";
  } else if (role === "admin") {
    getBlogApi = "admin/getself/blog";
  } else {
  }
  const getMyBlog = () => {
    fetch(`${apiurl}/${getBlogApi}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data jbjbjkb ", data);
        setMyblog(data.response);
      })
      .catch((error) => console.log("error", error));
  };
  // console.log("myblog",myblog)
  useEffect(() => {
    getMyBlog();
  }, []);

  // ..........  delete function ..............
  const handleDelete = (e) => {
    console.log("e", e._id);
    fetch(`${apiurl}/delete/blog/${e._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => getMyBlog())
      .catch((error) => console.log("error", error));
    alert("Success: Your Blog Post Has Been Deleted!");
  };

  // .........................................

  const handleState = (id) => {
    fetch(`${apiurl}/admin/approve/${id._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => getMyBlog())
      .catch((error) => console.log("error", error));
  };

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
      {isOpen ? (
        <Display
          func={getMyBlog}
          data={value}
          open={isOpen}
          // onClose={() => {
          //   setIsOpen(false);
          // }}
          setIsOpen={setIsOpen}
        />
      ) : (
        <div className="container" style={{ marginTop: "90px" }}>
          <div className="section_our_solution">
            <div className="container mt-5 mb-3">
              <div className="row">
                {myblog?.map((el) => (
                  <div className="col-md-4">
                    <div className="our_solution_category">
                      <div className="solution_cards_box">
                        <div className="solution_card">
                          <div className="hover_color_bubble"></div>
                          <div className="so_top_icon">
                            <img src={`${apiurl}/images/${el.image}`} alt="" />
                          </div>
                          <div className="solu_title">
                            <h3>
                              {truncate(capitalizeFirstLetter(el.title), 20)}
                            </h3>
                          </div>
                          <div className="solu_description">
                            <p>
                              {truncate(
                                capitalizeFirstLetter(el.descriptions),
                                30
                              )}
                            </p>
                            <hr />
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p>
                                {" "}
                                Status:
                                <span
                                  style={
                                    `${el.status}` === "approve"
                                      ? { color: "orange" }
                                      : { color: "red" }
                                  }
                                >
                                  {capitalizeFirstLetter(el.status)}
                                </span>
                              </p>
                              <p>
                                {format(
                                  el.createdAt ? el.createdAt : "1days ago"
                                )}
                              </p>
                            </div>

                            <div
                              className="row"
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <button
                                type="button"
                                className="read_more_btn"
                                value="Open modal"
                                onClick={() => {
                                  setIsOpen(true);
                                  setVlaue(el);
                                }}
                              >
                                <FaEdit />
                              </button>
                              <button type="button" className="read_more_btn">
                                <Link
                                  to={`/detail/Blog/${el._id}`}
                                  className="link"
                                >
                                  <FaEye />
                                </Link>
                              </button>
                              <button
                                type="button"
                                className="read_more_btn color_red"
                                onClick={() => handleDelete(el)}
                              >
                                <AiTwotoneDelete />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <input type="button" value="Open modal" onClick={openModal} /> */}
          </div>
        </div>
      )}
    </>
  );
};
