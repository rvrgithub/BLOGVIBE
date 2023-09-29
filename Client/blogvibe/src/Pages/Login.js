import React, { useState } from "react";
import "../Styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import { apiurl } from "../App";

export const Login = () => {
  const [logStyle, setLogStyle] = useState("container");
  const [active, setActive] = useState(true);
  const navigat = useNavigate();
  const toggleForm = () => {
    //   const container = document.querySelector(".container");
    // https://codepen.io/kh3996/pen/pojXrBj
    //   container.classList.toggle("active");
    setLogStyle(`${logStyle} + active}`);
  };

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputvalue", inputValue);
    fetch(`${apiurl}/findBothLogin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data", data);
        if (data.status === true) {
          if (data.role === "admin") {
            localStorage.setItem("Token", data.token);
            localStorage.setItem("role", data.role);
            navigat("/");
          } else if (data.role === "user") {
            localStorage.setItem("Token", data.token);
            localStorage.setItem("role", data.role);
            navigat("/");
          } else {
            navigat("/register");
          }
        } else {
          // console.log("error")
          alert(data.massage);
        }
      })
      .catch((error) => alert("error", error));
  };

  return (
    <div>
      <section className="login_section">
        <div className={active ? "container" : "active"}>
          <div className="user signinBx">
            <div className="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
                alt=""
                
              />
            </div>
            <div className="formBx">
              <form>
                <h2>Sign In</h2>
                <input
                  type="text"
                  name="email"
                  value={inputValue.email}
                  placeholder="enter email"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="password"
                  name="password"
                  value={inputValue.password}
                  onChange={(e) => handleChange(e)}
                  placeholder="Password"
                />
                <input
                  type="submit"
                  name=""
                  value="Login"
                  onClick={(e) => handleSubmit(e)}
                />
                <p className="signup">
                  Don't have an account ?<Link to="/register">Sign Up.</Link>

                </p>
                <span style={{color:"Black"}}>Admin Credentials</span><br/>
                <span>admin@gmail.com</span>
                <span>Pass-12345678</span>
              <br/>
                <span>For user you can register ?</span>
              </form>
              
            </div>
           
          </div>
         
        </div>
      </section>
    </div>
  );
};
