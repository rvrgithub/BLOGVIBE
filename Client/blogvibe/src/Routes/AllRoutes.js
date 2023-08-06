import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home} from "../Pages/Home/Home";
import { AllUser } from "../Pages/Admin/AllUser";
import { Profile } from "../Pages/Profile";
import { DetailBlog } from "../Pages/DetailBlog";
import { AllBlogs } from "../Pages/AllBlogs";
import { Write_Blog } from "../Pages/Write_Blog";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/admin/all-user" element={<AllUser/>}/>
      <Route path="/profile"  element={<Profile/>}/>
      <Route path="/detail/Blog" element={<DetailBlog/>}/>
      <Route path="/allblog" element={<AllBlogs/>}/>
      <Route path="/write/blog" element={<Write_Blog/>}/>
    </Routes>
  );
};
