
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "../../Styles/navbar.css"


const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;
    color: white;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }


  // 
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  transition: height 0.4s ease-in-out;
  z-index: 1222;
  background-color: #fff;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;


export const AdminNav = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <div className="navContainer">
        <h1 className="logo">BLOGVIVE /Admin</h1>
        <ul className="menuUi">
          <li>
            <Link target="#" to="/allblog">
              ALL Blogs
            </Link>
          </li>
          <li>
            <Link to="/admin/all-user">All User</Link>
          </li>
          <li>
            <Link target="#" to="admin/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link target="#" to="/contactus">
              Contact Us
            </Link>
          </li>
          <li>
            <Link>logout</Link>
          </li>
        </ul>
        <button className="navbtn" onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </button>
      </div>
      <Overlay style={{ marginTop: "100px" }} open={toggle}>
        <OverlayMenu open={toggle}>
          <li>
            <Link target="#" to="/allblog">
              ALL Blogs
            </Link>
          </li>
          <li>
            <Link to="/admin/all-user">All User</Link>
          </li>
          <li>
            <Link target="#" to="admin/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link target="#" to="/contactus">
              Contact Us
            </Link>
          </li>
          <li>
            <Link>logout</Link>
          </li>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

