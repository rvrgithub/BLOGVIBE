import React from "react";
import "../Styles/allBlog.css";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
export const AllBlogs = () => {
  const data = [
    {
      name: "Mailchimp",
      day: "1 days ago",
      work: "Design",
      work2: " Senior Product",
      work3: " Designer-Singapore",
    },
    {
      name: "Mailchimp",
      day: "1 days ago",
      work: "Design",
      work2: " Senior Product",
      work3: " Designer-Singapore",
    },
    {
      name: "Mailchimp",
      day: "1 days ago",
      work: "Design",
      work2: " Senior Product",
      work3: " Designer-Singapore",
    },
    {
      name: "Mailchimp",
      day: "1 days ago",
      work: "Design",
      work2: " Senior Product",
      work3: " Designer-Singapore",
    },
    {
      name: "Mailchimp",
      day: "1 days ago",
      work: "Design",
      work2: " Senior Product",
      work3: " Designer-Singapore",
    },
    {
      name: "Mailchimp",
      day: "1 days ago",
      work: "Design",
      work2: " Senior Product",
      work3: " Designer-Singapore",
    },
  ];
  return (
    <div className="section_our_solution">
      <div class="container mt-5 mb-3">
        <div class="row">
          {data.map((e) => (
            <div class="col-md-4">
              <div className="our_solution_category">
                <div className="solution_cards_box">
                  <div className="solution_card">
                    <div className="hover_color_bubble"></div>
                    <div className="so_top_icon">
                      <img src="https://i.imgur.com/ZTkt4I5.jpg" />
                    </div>
                    <div className="solu_title">
                      <h3>Demo 1</h3>
                    </div>
                    <div className="solu_description">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its la yout.
                      </p>
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button type="button" className="read_more_btn">
                          <FaEdit />
                        </button>

                        <button type="button" className="read_more_btn">
                          <Link to="/detail/Blog"  className="link">
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
    </div>
  );
};
