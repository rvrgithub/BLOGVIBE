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

  console.log("blogData", blogData);
  return (
    <div className="section_our_solution mt-5">
      <div class="container mt-5 mb-3">
        <div class="row">
          {blogData?.map((e) => (
            <div class="col-md-4">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img src={`${apiurl}/images/${e.image}`} />
                    </div>
                    <div className="solu_title">
                      <h3>{truncate(e.title, 27)} ...</h3>
                    </div>
                    <div className="solu_description">
                      <p>{truncate(e.descriptions, 30)} ...</p>
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button
                          onClick={() => handleStatus(e)}
                          style={{
                            background: "#e5e5e5",
                            padding: "10px 5px",
                            color: "#cf837e",
                          }}
                        >
                          {e.status}
                        </button>
                        <button type="button" className="read_more_btn">
                          <FaEdit />
                        </button>

                        <button type="button" className="read_more_btn">
                          <Link to={`/detail/Blog/${e._id}`} className="link">
                            <FaEye />
                          </Link>
                        </button>

                        <button
                          type="button"
                          className="read_more_btn color_red"
                          onClick={() => handleDelete(e)}
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
    </div>
  );
};
