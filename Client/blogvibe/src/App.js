import { useEffect, useState } from "react";
import "./App.css";
// import { Navbar } from './Components/Navbar';
import { AdminNav } from "./Components/Navbar/AdminNav";
// import { UserNav } from "./Components/Navbar/UserNav";
import { Footer } from "./Pages/Footer";
import { AllRoutes } from "./Routes/AllRoutes";
import { useNavigate } from "react-router-dom";
export const apiurl = "http://localhost:4500";

function App() {
  let routeName = window.location.href.split("/")[3];
  // const navigte = useNavigate();
  // useEffect(() => {
  //   let token = localStorage.getItem("Token");
  //   if (!token) {
  //     navigte("/login");
  //   }
  // });
  return <AllRoutes />;
}

export default App;
