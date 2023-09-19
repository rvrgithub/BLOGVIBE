// import React, { useState } from "react";
// import "../../Styles/write_blog.css";
// import { apiurl } from "../../App";
// export const CreateBlog = () => {
//   const token = localStorage.getItem("Token");

//   const [inputValue, setInputValue] = useState({
//     description: "",
//     title: "",
//     image: "",
//   });
//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     console.log("name", name, value);
//     setInputValue({ ...inputValue, [name]: value });
//   };
//   console.log("input _ image", inputValue);

//   let writeBlogApi;
//   let role = localStorage.getItem("role");
//   if (role == "user") {
//     writeBlogApi = "create/blog";
//   } else if (role == "admin") {
//     writeBlogApi = "admin/create/blog";
//   } else {
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       inputValue.title == "" ||
//       inputValue.image == " " ||
//       inputValue.description == ""
//     ) {
//       alert("Requireds All fields");
//       return;
//     }
//     const data = new FormData();
//     data.set("title", inputValue.title);
//     data.set("image", inputValue.image);
//     data.set("descriptions", inputValue.description);
//     console.log("data", data);

//     fetch(`${apiurl}/${writeBlogApi}`, {
//       method: "POST",

//       headers: {
//         // "Content-Type":"application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: data,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status == true) {
//           alert("Congratulations, Your Blog Post is Live!");
//         } else {
//           alert("Let Your Thoughts Flow - Start Writing Your Blog!");
//         }
//       })
//       .catch((error) => console.log("error", error));

//     setInputValue({
//       description: "",
//       title: "",
//       image: "",
//     });
//   };
//   return (
//     <div className="container">
//       <div className="row p-5" style={{ marginTop: "85px" }}>
//         <div className="col-lg-7 mx-auto">
//           <div className="card mx-auto bg-light">
//             <div className="card-body bg-light">
//               <div className="container">
//                 <form id="contact-form">
//                   <div className="controls">
//                     <div className="col-md-12">
//                       <div className="form-group">
//                         {/* <label for="form_name">Title *</label> */}
//                         <input
//                           id="form_name"
//                           type="text"
//                           name="title"
//                           value={inputValue.title}
//                           onChange={(e) => handleInput(e)}
//                           className="form-control"
//                           placeholder="Write Your Title*"
//                           required="required"
//                           data-error="Firstname is required."
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-12">
//                       <div className="form-group" style={{ margin: "20px 0" }}>
//                         <input
//                           type="file"
//                           src="img_submit.gif"
//                           alt="Submit"
//                           id="form_lastname"
//                           name="image"
//                           // value={inputValue.image}
//                           className="form-control"
//                           onChange={(e) =>
//                             setInputValue({
//                               ...inputValue,
//                               image: e.target.files[0],
//                             })
//                           }
//                           placeholder="select any file*"
//                           required="required"
//                           data-error="Lastname is required."
//                         />
//                       </div>
//                     </div>

//                     <div className="row">
//                       <div className="col-md-12">
//                         <div className="form-group">
//                           {/* <label for="form_message">Message *</label> */}
//                           <textarea
//                             id="form_message"
//                             name="description"
//                             className="form-control"
//                             placeholder="Write your message here."
//                             rows="4"
//                             value={inputValue.description}
//                             onChange={(e) => handleInput(e)}
//                             required="required"
//                             data-error="Please, leave us a message."
//                           />
//                         </div>
//                       </div>

//                       <div className="col-md-12">
//                         <input
//                           style={{ width: "100%", margin: "10px 0" }}
//                           type="submit"
//                           className="btn btn-success btn-send   pt-2 btn-block
//                         "
//                           onClick={(e) => handleSubmit(e)}
//                           value="Send Message"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useRef } from "react";
import "../../Styles/write_blog.css";
import { apiurl } from "../../App";
export const CreateBlog = () => {
  const token = localStorage.getItem("Token");
  const fileInputRef = useRef(null);
  const [inputValue, setInputValue] = useState({
    description: "",
    title: "",
    image: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log("name", name, value);
    setInputValue({ ...inputValue, [name]: value });
  };
  // console.log("input _ image", inputValue);

  let writeBlogApi;
  let role = localStorage.getItem("role");
  if (role == "user") {
    writeBlogApi = "create/blog";
  } else if (role == "admin") {
    writeBlogApi = "admin/create/blog";
  } else {
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputValue.title == "" ||
      inputValue.image == " " ||
      inputValue.description == ""
    ) {
      alert("Requireds All fields");
      return;
    }
    const data = new FormData();
    data.set("title", inputValue.title);
    data.set("image", inputValue.image);
    data.set("descriptions", inputValue.description);
    // console.log("data", data);

    fetch(`${apiurl}/${writeBlogApi}`, {
      method: "POST",

      headers: {
        // "Content-Type":"application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == true) {
          alert("Congratulations, Your Blog Post is Live!");
          fileInputRef.current.value = "";
          setInputValue({
            description: "",
            title: "",
            image: "",
          });
        } else {
          alert("Let Your Thoughts Flow - Start Writing Your Blog!");
        }
      })
      .catch((error) => alert("error", error));
  };
  return (
    <div className="container">
      <div className="row p-5" style={{ marginTop: "85px" }}>
        <div className="col-lg-7 mx-auto">
          <div className="card mx-auto bg-light">
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
                          value={inputValue.title}
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
                          // value={inputValue.image}
                          ref={fileInputRef}
                          className="form-control"
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

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          {/* <label for="form_message">Message *</label> */}
                          <textarea
                            id="form_message"
                            name="description"
                            className="form-control"
                            placeholder="Blog Descriptions..."
                            rows="4"
                            value={inputValue.description}
                            onChange={(e) => handleInput(e)}
                            required="required"
                            data-error="Please, leave us a message."
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <input
                          style={{ width: "100%", margin: "10px 0" }}
                          type="submit"
                          className="btn btn-success btn-send   pt-2 btn-block
                        "
                          onClick={(e) => handleSubmit(e)}
                          value="Create Blog"
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
