import React, { useState } from "react";
import "./display.css";
import { useTheme } from "styled-components";
export const Display = ({ open, onClose, data }) => {
  const [ updateValue, setUpdateValue ] = useState({
    descriptions: data.descriptions ,
    title: data.title,
    // Image: "",
  });

  console.log("data",data)
  console.log("updateValue", updateValue);
  const handleInput=(e)=>{
const {name, value} = e.target;
setUpdateValue({...updateValue,[name]:value})
  }

  console.log("update",updateValue);
  if (!open) return null;
  return (
    <>
      <div class="row " style={{marginTop:"100px", position:"absolute"}}>
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
                        onChange={(e)=>handleInput(e)}
                        value={updateValue.title}
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
                        value={updateValue.image}
                        onChange={(e)=>handleInput(e)}
                        class="form-control"
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
                          name="descriptions"
                          value={updateValue.descriptions}
                          onChange={(e)=>handleInput(e)}
                          class="form-control"
                          placeholder="Write your message here."
                          rows="4"
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
                        value="Update Message"
                        onClick={onClose}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
