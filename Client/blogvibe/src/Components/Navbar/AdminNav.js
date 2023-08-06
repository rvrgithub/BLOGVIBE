// import React from 'react'
// import { Link } from 'react-router-dom';
// import "../../Styles/navbar.css"
// export const AdminNav = () => {
//     const [click, setClick] = React.useState(false);

//     const handleClick = () => setClick(!click);
//     const Close = () => setClick(false);

//     return (
//         <div>
//             <div className={click ? "main-container" : ""} onClick={() => Close()} />
//             <nav className="navbar" onClick={e => e.stopPropagation()}>
//                 <div className="nav-container">
//                     <Link exact to="/" className="nav-logo">
//                         CodeBucks
//                         <i className="fa fa-code"></i>
//                     </Link>
//                     <ul className={click ? "nav-menu active" : "nav-menu"}>
//                         <li className="nav-li">
//                             <Link
//                                 exact
//                                 to="/"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                 onClick={click ? handleClick : null}
//                             >
//                                 Home
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 exact
//                                 to="/about"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                 onClick={click ? handleClick : null}
//                             >
//                                 About
//                             </Link>
//                         </li>

//                        {click? <p>asdjfhsdf</p> :<p>784357634957</p>}
//                         <li className="nav-item">
//                             <Link
//                                 exact
//                                 to="/blog"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                 onClick={click ? handleClick : null}
//                             >
//                                 Blog
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link
//                                 exact
//                                 to="/contact"
//                                 activeClassName="active"
//                                 className="nav-links"
//                                 onClick={click ? handleClick : null}
//                             >
//                                 Contact Us
//                             </Link>
//                         </li>
//                     </ul>
//                     <div className="nav-icon" onClick={handleClick}>
//                         <i className={click ? "fa fa-times" : "fa fa-bars"}></i>


//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }




import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 15vh;
  background: none;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  /* border: 1px solid red; */
  width:100% ;
  background-color: rgba(250,250,250,0.15);
  background-color: #1f272b;
  `; 

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  li {
    margin: 0px 20px;
    font-size: 22px;
  }
  
  @media (max-width: 768px) {
    display: none;
    z-index: 2000;
  }
`;


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
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: red;
  transition: height 0.4s ease-in-out;
z-index: 1222;
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
    opacity: ${props => (props.open ? 1 : 0)};
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
     <Nav>
        <Logo>BLOGVIVE /Admin</Logo>
        <Menu>
          <li>
            <Link target="#" to="/allblog">
              ALL Blogs
            </Link>
          </li>
          <li>
            <Link  to="/admin/all-user">
              All User
            </Link>
          </li>
          <li>
            <Link target="#" to="admin/profile">
              Profile
            </Link>
          </li>

          <li>
            <Link target="#" to="/register">
             register
            </Link>
          </li>
          <li>
            <Link >
             logout
            </Link>
          </li>
        </Menu>
        <button className="navbtn" onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </button>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <li>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              Instagram
            </Link>
          </li>
          <li>
            <Link target="#" href="https://www.behance.net/igordumencic">
              Behance
            </Link>
          </li>
          <li>
            <Link target="#" href="https://github.com/Igor178">
              Github
            </Link>
          </li>
        </OverlayMenu>
      </Overlay> 
    </>
  );
};

// export default Header;
