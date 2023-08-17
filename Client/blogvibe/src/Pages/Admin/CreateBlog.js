import React, { useState } from "react";
import "../../Styles/write_blog.css";
import { apiurl } from "../../App";
export const CreateBlog = () => {

  const token= localStorage.getItem("Token");

  const [inputValue, setInputValue] = useState({
    description: "",
    title: "",
    image: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log("name", name, value);
    setInputValue({ ...inputValue, [name]: value });
  };
  console.log("input _ image", inputValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", inputValue.title);
    data.set("image", inputValue.image);
    data.set("descriptions", inputValue.description);
    console.log("data", data);

    fetch(`${apiurl}/admin/create/blog`, {
      method: "POST",
      headers: {
        // "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("error", error));
  };
  return (
    <div class="container mt-5 mb-3" style={{}}>
      {/* <div class="text-center">
        <h1>Write Your Blog</
        h1>
      </div> */}
      <div class="row">
        {/* <div class="col-lg-7 mx-auto"> */}
        <div class="card mt-2 mx-auto p-4 bg-light">
          <div class="card-body bg-light">
            <div class="container">
              <form id="contact-form">
                <div class="controls">
                  <div class="col-md-12">
                    <div class="form-group">
                      {/* <label for="form_name">Title *</label> */}
                      <input
                        id="form_name"
                        type="text"
                        name="title"
                        value={inputValue.title}
                        onChange={(e) => handleInput(e)}
                        class="form-control"
                        placeholder="Write Your Title*"
                        required="required"
                        data-error="Firstname is required."
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group" style={{ margin: "20px 0" }}>
                      <input
                        type="file"
                        src="img_submit.gif"
                        alt="Submit"
                        id="form_lastname"
                        name="image"
                        // value={inputValue.image}
                        class="form-control"
                        onChange={(e) =>
                          setInputValue({
                            ...inputValue,
                            image: e.target.files[0],
                          })
                        }
                        placeholder="select any file*"
                        required="required"
                        data-error="Lastname is required."
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        {/* <label for="form_message">Message *</label> */}
                        <textarea
                          id="form_message"
                          name="description"
                          class="form-control"
                          placeholder="Write your message here."
                          rows="4"
                          value={inputValue.description}
                          onChange={(e) => handleInput(e)}
                          required="required"
                          data-error="Please, leave us a message."
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <input
                        type="submit"
                        class="btn btn-success btn-send  pt-2 btn-block
                        "
                        onClick={(e) => handleSubmit(e)}
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
      {/* </div> */}
    </div>
  );
};
