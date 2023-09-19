import React, { useState } from "react";
import "../Styles/write_blog.css";
export const Write_Blog = () => {
  const [indeputValue, setInputValue] = useState({
    description: "",
    title: "",
    image: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log("name",name,value);
  };

  return (
    <div
      className="container"
      style={{
        margin: "100px auto",
        // position: "absolute",
        background: "red",
        justifyContent: "center",
      }}
    >
      <div className="text-center">
        <h1>Write Your Blog</h1>
      </div>
      <div className="row ">
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
              <div className="container">
                <form id="contact-form">
                  <div className="controls">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="form_name">Title *</label>
                        <input
                          id="form_name"
                          type="text"
                          name="title"
                          value={indeputValue.title}
                          onChange={(e) => handleInput(e)}
                          className="form-control"
                          placeholder="Write Your Title*"
                          required="required"
                          data-error="Firstname is required."
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group" style={{ margin: "20px 0" }}>
                        <input
                          type="file"
                          src="img_submit.gif"
                          alt="Submit"
                          id="form_lastname"
                          name="image"
                          value={indeputValue.image}
                          className="form-control"
                          onChange={(e) => handleInput(e)}
                          placeholder="select any file*"
                          required="required"
                          data-error="Lastname is required."
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          {/* <label for="form_message">Message *</label> */}
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            value={indeputValue.description}
                            onChange={(e) => handleInput(e)}
                            required="required"
                            data-error="Please, leave us a message."
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <input
                          type="submit"
                          className="btn btn-success btn-send  pt-2 btn-block
                        "
                          value="Send Message"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
