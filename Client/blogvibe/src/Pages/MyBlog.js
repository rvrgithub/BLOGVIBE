import React, { useEffect, useState } from "react";
import { apiurl } from "../App";

import { FaEdit, FaEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
export const MyBlog = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [value, setVlaue] = useState("");
  const token = localStorage.getItem("Token");
  console.log("token", token);
const [myblog,setMyblog] = useState([]);
  const getMyBlog = () => {
    fetch(`${apiurl}/admin/getself/blog`, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setMyblog( data.response))
      .catch((error) => console.log("error", error));
  };
  console.log("myblog",myblog)
  useEffect(() => {
    getMyBlog();
  }, []);
  return (
    <div>
      <div className="section_our_solution">
        <div class="container mt-5 mb-3">
          <div class="row">
            {myblog?.map((el) => (
              <div class="col-md-4">
                <div className="our_solution_category">
                  <div className="solution_cards_box">
                    <div className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div className="so_top_icon">
                        <img src={`${apiurl}/images/${el.image}`} alt="" />
                      </div>
                      <div className="solu_title">
                        <h3>{el.title}</h3>
                      </div>
                      <div className="solu_description">
                        <p>{el.descriptions}</p>
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
                            <Link to="/detail/Blog" className="link">
                              <FaEye />
                            </Link>
                          </button>
                          <button
                            type="button"
                            className="read_more_btn color_red"
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
  );
};
