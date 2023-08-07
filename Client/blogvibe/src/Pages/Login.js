import React, { useState } from "react";
import "../Styles/login.css";
import { Link } from "react-router-dom";
export const Login = () => {
  const [logStyle, setLogStyle] = useState("container");
  const toggleForm = () => {
    //   const container = document.querySelector(".container");
    // https://codepen.io/kh3996/pen/pojXrBj
    //   container.classList.toggle("active");
    setLogStyle(`${logStyle} + active}`);
  };

  const [active, setActive] = useState(true);
  return (
    <div>
      <section className="login_section">
        <div className={active ? "container" : "active"}>
          <div class="user signinBx">
            <div class="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
                alt=""
              />
            </div>
            <div class="formBx">
              <form action="" onsubmit="return false;">
                <h2>Sign In</h2>
                <input type="text" name="" placeholder="Username" />
                <input type="password" name="" placeholder="Password" />
                <input type="submit" name="" value="Login" />
                <p class="signup">
                  Don't have an account ?<Link to="/register">Sign Up.</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
