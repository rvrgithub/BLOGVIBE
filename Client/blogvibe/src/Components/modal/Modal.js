import React, { useState } from "react";
import "./display.css";
import { useTheme } from "styled-components";
import { apiurl } from "../../App";
export const Display = ({ open, setIsOpen, data, func }) => {
  const [updateValue, setUpdateValue] = useState({
    descriptions: data.descriptions,
    title: data.title,
    // Image: "",
  });
  let token = localStorage.getItem("Token");

  console.log("data", data);
  console.log("updateValue", updateValue);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUpdateValue({ ...updateValue, [name]: value });
  };
  const handleUpdate = (e) => {
    const updateData = new FormData();
    updateData.set("title", updateValue.title);
    updateData.set("image", updateValue.image);
    updateData.set("descriptions", updateValue.descriptions);
    // console.log("data", data);

    fetch(`${apiurl}/update/blogBy/admin/${data._id}`, {
      method: "PUT",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: updateData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data from update", data);
        func();
      })
      .catch((error) => console.log("error", error));
    setIsOpen(false);
    alert("Your Blog Post Has Been Successfully Edited");
  };

  console.log("update", updateValue);
  if (!open) return null;
  return (
    <>
       <div className="container">
      <div class="row p-5" style={{ marginTop: "85px" }}>
        <div class="col-lg-7 mx-auto">
        <div className="card  mx-auto bg-light">
          <div className="card-body bg-light">
            <div className="container">
              <form id="contact-form">
                <div className="controls">
                  <div className="col-md-12">
                    <div className="form-group">
                      {/* <label for="form_name">Title *</label> */}
                      <input
                        id="form_name"
                        type="text"
                        name="title"
                        onChange={(e) => handleInput(e)}
                        value={updateValue.title}
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
                        // value={updateValue.image}

                        onChange={(e) =>
                          setUpdateValue({
                            ...updateValue,
                            image: e.target.files[0],
                          })
                        }
                        className="form-control"
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
                          name="descriptions"
                          value={updateValue.descriptions}
                          onChange={(e) => handleInput(e)}
                          className="form-control"
                          placeholder="Write your message here."
                          rows="4"
                          required="required"
                          data-error="Please, leave us a message."
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <input
                        type="submit"
                        className="btn btn-success btn-send  pt-2 btn-block"
                        value="Update Message"
                        onClick={handleUpdate}
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
    </>
  );
};
