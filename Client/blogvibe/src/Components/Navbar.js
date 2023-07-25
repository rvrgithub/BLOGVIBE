import React from 'react'
import { Link } from 'react-router-dom';
import "../Styles/navbar.css"
export const Navbar = () => {
    return (
        <header class="header-area header-sticky">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav class="main-nav">
                  {/* <!-- ***** Logo Start ***** --> */}
                  <Link to="/" className="logo">
                    BLOGVIBE{" "}
                  </Link>
                  {/* <!-- ***** Logo End ***** --> */}
                  {/* <!-- ***** Menu Start ***** --> */}
                  <ul class="nav">
                    <li class="scroll-to-section">
                      <Link className="active" to="/">
                        {" "}
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>{" "}
                    </li>
                    <li class="scroll-to-section">
                      <Link to="">My Blog</Link>
                    </li>
                    {/* <li class="has-sub">
                      <a href="javascript:void(0)">Pages</a>
                      <ul class="sub-menu">
                        <li>
                          <a href="meetings.html">Upcoming Meetings</a>
                        </li>
                        <li>
                          <a href="meeting-details.html">Meeting Details</a>
                        </li>
                      </ul>
                    </li> */}
                    <li class="scroll-to-section">
                      <a href="#courses">Courses</a>
                    </li>
                    <li class="scroll-to-section">
                      <Link to={"contact"}>Contact Us</Link>
                    </li>
                  </ul>
                  <Link class="menu-trigger">
                    <span>Menu</span>
                  </Link>
                  {/* <!-- ***** Menu End ***** --> */}
                </nav>
              </div>
            </div>
          </div>
        </header>
      );
    };
    