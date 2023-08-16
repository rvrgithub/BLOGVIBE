import React, { useEffect, useState, useCallback } from "react";
import "../Styles/allBlog.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { apiurl } from "../App";
import { Display } from "../Components/modal/Modal";
export const AllBlogs = () => {
  // .........................madal.................

  const [isOpen, setIsOpen] = useState(false);
  const [value, setVlaue] = useState("");
  // .........................modal ................
  const [blogData, setBlogData] = useState({});
  // const data = [
  //   {
  //     name: "Mailchimp",
  //     day: "1 days ago",
  //     work: "Design",
  //     work2: " Senior Product",
  //     work3: " Designer-Singapore",
  //   },
  //   {
  //     name: "Mailchimp",
  //     day: "1 days ago",
  //     work: "Design",
  //     work2: " Senior Product",
  //     work3: " Designer-Singapore",
  //   },
  //   {
  //     name: "Mailchimp",
  //     day: "1 days ago",
  //     work: "Design",
  //     work2: " Senior Product",
  //     work3: " Designer-Singapore",
  //   },
  //   {
  //     name: "Mailchimp",
  //     day: "1 days ago",
  //     work: "Design",
  //     work2: " Senior Product",
  //     work3: " Designer-Singapore",
  //   },
  //   {
  //     name: "Mailchimp",
  //     day: "1 days ago",
  //     work: "Design",
  //     work2: " Senior Product",
  //     work3: " Designer-Singapore",
  //   },
  //   {
  //     name: "Mailchimp",
  //     day: "1 days ago",
  //     work: "Design",
  //     work2: " Senior Product",
  //     work3: " Designer-Singapore",
  //   },
  // ];

  const getData = () => {
    fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("blogData", blogData.blogs);
  return (
    <>
    {isOpen ?( <Display
        data={value}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />) :(
    
      <div className="section_our_solution">
        <div class="container mt-5 mb-3">
          <div class="row">
            {blogData?.blogs?.map((el) => (
              <div class="col-md-4">
                <div className="our_solution_category">
                  <div className="solution_cards_box">
                    <div className="solution_card">
                      <div className="hover_color_bubble"></div>
                      <div className="so_top_icon">
                        <img src={`${apiurl}/images/${el.image}`}  alt=""/>
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
      )}
      {/* ..........................modal................ */}
    </>
  );
};
