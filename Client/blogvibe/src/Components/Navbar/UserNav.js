import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

import { RiCloseLine } from "react-icons/ri";

import "./uernav.css";
import { LiaBlogSolid } from "react-icons/lia";
export const UserNav = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);


  return (
    <div class=" fixed-top">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            <h1 className="logo">
              {" "}
              BLOGVIBE
              <LiaBlogSolid style={{marginBottom:"10px" ,fontSize:"30px"}} />
            </h1>
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/allblog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                All Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/myblog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                My Blog
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                exact
                to="/admin/write/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Write Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                exact
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
                target="#"
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                exact
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Register
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <h1 className="logo">
              {" "}
              {click ? <RiCloseLine /> : <HiMenuAlt1 />}
            </h1>
          </div>
        </div>
      </nav>
    </div>
  );
};
