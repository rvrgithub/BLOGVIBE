import React, { useEffect } from "react";

export const MyBlog = () => {
  const token = localStorage.getItem("token");
  console.log("token", token);

  const getMyBlog = () => {
    fetch("", {})
      .then((res) => res.json())
      .then((data) => console.log("data", data))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {});
  return <div>MyBlog</div>;
};
