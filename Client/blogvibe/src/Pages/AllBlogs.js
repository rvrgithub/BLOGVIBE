import React, { useEffect, useState, useCallback } from "react";
import "../Styles/allBlog.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { apiurl } from "../App";
import { Display } from "../Components/modal/Modal";
import { format} from "timeago.js";
export const AllBlogs = () => {
  // .........................madal.................

  const [isOpen, setIsOpen] = useState(false);
  const [value, setVlaue] = useState("");
  let role = localStorage.getItem("role");
  // .........................modal ................
  const [blogData, setBlogData] = useState([]);
  let token = localStorage.getItem("Token");
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  const getData = () => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDeleteFunc = (e) => {
    // console.log("e", e._id);
    fetch(`${apiurl}/admin/delete/blog/${e._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => getData())
      .catch((error) => console.log("error", error));
  };
  // console.log("blogData", blogData.blogs);

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
          func={getData}
          data={value}
          open={isOpen}
          // onClose={() => {
          //   setIsOpen(false);
          // }}
          setIsOpen={setIsOpen}
        />
      ) : (
        <div className="section_our_solution" style={{ marginTop: "80px" }}>
          <div className="container mt-5 mb-3">
            <div className="row">
              {blogData?.blogs?.map((el, index) => (
                <div className="col-md-4" key={index}>
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
                          {/* <p>{el.descriptions}</p> */}
                          <p>
                            {truncate(
                              capitalizeFirstLetter(el.descriptions),
                              30
                            )}{" "}
                          </p>
                          <hr />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <img
                                src={`${apiurl}/images/${
                                  el.user
                                    ? el.user.profileImage
                                    : "1694688315354.jfif"
                                    
                                   
                                }`}
                                height={"30px"}
                                style={{ width: "30px" }}
                              />
                              <p>{el.user ? el.user.name :"Admin"}</p>
                            </div>
                            <p>{format(el.createdAt ? el.createdAt :"1days ago")}</p>
                          </div>
                          <div
                            className="row"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            {role !== "user" && (
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
                            )}

                            <button type="button" className="read_more_btn">
                              <Link
                                to={`/detail/Blog/${el._id}`}
                                className="link"
                              >
                                <FaEye />
                              </Link>
                            </button>
                            {role !== "user" && (
                              <button
                                type="button"
                                className="read_more_btn color_red"
                                onClick={() => handleDeleteFunc(el)}
                              >
                                <AiTwotoneDelete />
                              </button>
                            )}
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
      )}
    </>
  );
};
