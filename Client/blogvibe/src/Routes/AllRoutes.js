import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home} from "../Pages/Home/Home";
import { AllUser } from "../Pages/Admin/AllUser";
import {  UserProfile } from "../Pages/UserProfile";
import { DetailBlog } from "../Pages/DetailBlog";
import { AllBlogs } from "../Pages/AllBlogs";
import { Write_Blog } from "../Pages/Write_Blog";
import { ContactUs } from "../Pages/ContactUs";
import { Profile } from "../Pages/Profile";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin/all-user" element={<AllUser />} />
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/detail/Blog" element={<DetailBlog />} />
      <Route path="/allblog" element={<AllBlogs />} />
      <Route path="/write/blog" element={<Write_Blog />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/admin/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
