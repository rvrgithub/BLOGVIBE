import React from "react";
import "../Styles/allBlog.css";
import { Link } from "react-router-dom";
import { FaEdit, FaEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

export const AllBlogs = () => {
  return (
    // <div>

      <div className="section_our_solution">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12" style={{width:"100%"}}>
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
                      distracted by the readable content of a page when looking
                      at its la yout.
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
                        <FaEye />
                      </button>

                      <button type="button" className="read_more_btn color_red">
                        <AiTwotoneDelete />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <img src="https://i.imgur.com/ZTkt4I5.jpg" />
                  </div>
                  <div className="solu_title">
                    <h3>Demo 2</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <button type="button" className="read_more_btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              {/* <!--  --> */}
              <div className="solution_cards_box sol_card_top_3">
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <img src="https://i.imgur.com/ZTkt4I5.jpg" />
                  </div>
                  <div className="solu_title">
                    <h3>Demo 3</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <button type="button" className="read_more_btn">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="solution_card">
                  <div className="hover_color_bubble"></div>
                  <div className="so_top_icon">
                    <img src="https://i.imgur.com/ZTkt4I5.jpg" />
                  </div>
                  <div className="solu_title">
                    <h3>Demo 4</h3>
                  </div>
                  <div className="solu_description">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <button type="button" className="read_more_btn">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};
