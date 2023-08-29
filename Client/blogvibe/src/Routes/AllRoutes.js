import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { AllUser } from "../Pages/Admin/AllUser";
import { UserProfile } from "../Pages/UserProfile";
import { DetailBlog } from "../Pages/DetailBlog";
import { AllBlogs } from "../Pages/AllBlogs";
import { Write_Blog } from "../Pages/Write_Blog";
import { ContactUs } from "../Pages/ContactUs";
import { Profile } from "../Pages/Profile";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { CreateBlog } from "../Pages/Admin/CreateBlog";
import { PendingBlog } from "../Pages/Admin/PendingBlog";
import { UserHomePage } from "../Pages/Home/UserHomePage";
import { MyBlog } from "../Pages/MyBlog";
import { AdminNav } from "../Components/Navbar/AdminNav";
import { Footer } from "../Pages/Footer";
// import { ExtraPage } from "../Pages/Admin/ExtraPage";

export const AllRoutes = () => {
  const [routeName, setRouteName] = useState(true);
  let navigate = useNavigate();

  let getData = async () => {
    let token = localStorage.getItem("Token");
    console.log(token);
    if (!token) {
      navigate("/login");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const route = window.location.href.split("/")[3];

  return (
    <div className="App">
      {route != "register" && route != "login" && <AdminNav />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin/all-user" element={<AllUser />} />
        <Route path="/user/profile/:id" element={<UserProfile />} />
        <Route path="/detail/Blog/:id" element={<DetailBlog />} />
        <Route path="/allblog" element={<AllBlogs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/write/blog" element={<CreateBlog />} />
        <Route path="/admin/pending/blog" element={<PendingBlog />} />
        <Route path="/user" element={<UserHomePage />} />
        <Route path="/myblog" element={<MyBlog />} />
        {/*  userRoute */}
      </Routes>
      {route != "register" && route != "login" && <Footer />}
    </div>
  );
};
