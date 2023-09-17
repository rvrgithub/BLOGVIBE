import React, { useEffect, useRef, useState } from "react";
import { apiurl } from "../App";
import { AiFillCamera, AiOutlineCloudUpload } from "react-icons/ai";

export const Profile = () => {
  const [data, setData] = useState("");
  const [image, setImage] = useState();
  const inputRef = useRef();

  let token = localStorage.getItem("Token");

  let profileApi;
  let role = localStorage.getItem("role");
  if (role === "user") {
    profileApi = "profile";
  } else if (role === "admin") {
    profileApi = "admin/profile";
  } else {
  }

  const getProfile = () => {
    fetch(`${apiurl}/${profileApi}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.getUserId);
      });
  };
  console.log("datadddddd", data);
  useEffect(() => {
    getProfile();
  }, []);

  const updateProfilePic = () => {
    let fdata = new FormData();
    let api;
    if (role == "user") {
      api = "profile/image/upload";
    } else {
      api = "admin/profile/image/upload/";
    }
    fdata.append("image", image);
    fetch(`${apiurl}/${api}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: fdata,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage();
        getProfile();
        console.log(data);
      });
  };

  // .................... capitalizeFirstLetter  ..........................
  function capitalizeFirstLetter(text) {
    // Check if the input text is empty or null
    if (!text) {
      return "";
    }

    // Convert the first letter to uppercase and the rest to lowercase
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  return (
    <section
      style={{ backgroundColor: "#eee", width: "100%", marginTop: "60px" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                {!image ? (
                  <img
                    src={`${apiurl}/images/${data.profileImage}`}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "120px" , height:"100px"}}
                  />
                ) : (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                )}
                <div>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    style={{ display: "none" }}
                    ref={inputRef}
                  />
                  <AiFillCamera onClick={() => inputRef.current.click()} />{" "}
                  {image && (
                    <button onClick={() => updateProfilePic()}>Upload</button>
                  )}
                </div>
                <h5 className="my-3"> {capitalizeFirstLetter(data.name)}</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">
                    Follow
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-1"
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Name </p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {capitalizeFirstLetter(data.name)}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email </p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{data.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{data.phoneNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{data.phoneNumber}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Bay Area, San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
