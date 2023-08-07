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



// ........................................................


// import React, { useState } from "react";
// import "./heading1.css";
// import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
// // import { API_URL } from "../../App";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import { useNavigate } from "react-router-dom";
// // import {
// //   MDBCard,
// //   MDBCardTitle,
// //   MDBCardText,
// //   MDBCardBody,
// //   MDBCardImage,
// //   MDBRow,
// //   MDBCol,
// // } from "mdb-react-ui-kit";
// const style = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "80%",
//   height: "80%",
//   bgcolor: "white",
//   border: ".5px solid pink",
//   boxShadow: 24,
//   borderRadius: "20px",
//   p: 4,
// };
// export const Heading = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [email, setEmail] = useState()
//   const [password, setPassword] = useState()
//   const [loginError, setLoginError] = useState("")
//   const [errShow, setErrShow] = useState(false)
//   const navigate = useNavigate()


//   // const handleSubmit = () => {
//   //   fetch(`${API_URL}/both/login`, {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //       Accept: "application/json"
//   //     },
//   //     body: JSON.stringify({
//   //       email, password
//   //     })
//   //   }).then(res => res.json())
//   //     .then(data => {
//   //       if (data.message.role == "Student") {

//   //         localStorage.setItem("token", data.message.token)
//   //         localStorage.setItem("role", data.message.role)
//   //         setErrShow(false)
//   //         setTimeout(() => {
//   //           navigate('/student_home')
//   //         }, 1000)

//   //       } else if (data.message.role == "Admin") {
//   //         localStorage.setItem("token", data.message.token)
//   //         localStorage.setItem("role", data.message.role)
//   //         setErrShow(false)
//   //         setTimeout(() => {
//   //           navigate('/employee_home')

//   //         }, 1000)
//   //       } else if (data.status == false) {
//   //         setLoginError(data.message)
//   //         setErrShow(true)

//   //       }
//   //     }).catch(err => alert(err.message))
//   // };


//   const [rname, setRname] = useState()
//   const [remail, setRemail] = useState()
//   const [rphone, setRphone] = useState()
//   const [rpassword, setRpassword] = useState()
//   const [rerror, setRerror] = useState()
//   const [rshow, setRshow] = useState()

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };
//   const [open, setOpen] = React.useState(false);
//   const [open1, setOpen1] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const handleOpen1 = () => setOpen1(true);
//   const handleClose1 = () => setOpen1(false);



//   const userRegister = () => {
//     fetch(`${API_URL}/student/register`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: JSON.stringify({
//         name: rname,
//         email: remail,
//         phone: rphone,
//         password: rpassword
//       })
//     }).then(res => res.json())
//       .then(data => {
//         if (data.status == true) {
//           setRshow(false)
//           alert(data.message)
//           handleOpen()
//           handleClose1()
//           setRemail("")
//           setRname("")
//           setRphone("")
//           setRpassword("")

//         } else {
//           setRerror(data.message)
//           setRshow(true)
//         }
//       }).catch(err => alert(err.message))
//   }
//   return (
//     <>
//       <nav>
//         <div className="logo">
//           <img
//             src="images/logo.png"
//             alt="Logo Image"
//             style={{ width: "270px", marginTop: "5px" }}
//           />
//         </div>
//         <div
//           className={`hamburger ${isOpen ? "open" : ""}`}
//           onClick={toggleNavbar}
//         >
//           <div className="line1"></div>
//           <div className="line2"></div>
//           <div className="line3"></div>
//         </div>
//         <div style={{ width: "300px" }}></div>
//         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//           <li>
//             <Link to="/">Home</Link>{" "}
//           </li>
//           <li>
//             <Link to="/aboutus">About</Link>{" "}

//           </li>
//           <li>
//             <Link to="/books">Books</Link>
//           </li>
//           <li>
//             <Link to="/library">Library</Link>
//           </li>
//           <li>
//             <Link to="/contactus">Contact</Link>
//           </li>
//           <li
//             onClick={handleOpen}
//             style={{ color: "white", fontWeight: "500" }}
//           >
//             <Link>LOGIN</Link>{" "}
//           </li>
//           <li
//             onClick={handleOpen1}
//             style={{ color: "white", fontWeight: "500" }}
//           >
//             <Link>Register</Link>{" "}
//           </li>
//         </ul>
//       </nav>
//       <Modal
//         open={open}
//         // onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         hideBackdrop="true"
//         disableBackdropClick
//         disableEscapeKeyDown
//       >
//         {/* <Dialog onClose={handleClose} /> */}
//         <Box sx={style}>
//           <div
//             style={{
//               textAlign: "right",
//               fontSize: "34px",
//               position: "absolute",
//               top: "0",
//               right: "20px",
//               color: "black",
//               cursor: "pointer",
//             }}
          
//             // onClick={handleClose}
//           >
//             x
//           </div>

//           <div class="d-flex justify-content-between gty">
//             <div style={{ width: "50%", height: "100%" }} class="df" >
//               <img src="https://i.gifer.com/IPNp.gif" />
//             </div>
//             <div style={{ width: "50%" }}>
//               <label>Email ID</label>
//               <input
//                 style={{ width: "90%", borderRadius: "20px !important" }}
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <label>Password</label>

//               <input style={{ width: "90%" }}
//                 value={password}
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {errShow && <div><i class="fa-solid fa-circle-exclamation" style={{ color: "red" }}></i><span style={{ color: "red", marginLeft: "10px" }}>{loginError}</span></div>}

//               <div class="col d-flex justify-content-center">
//                 <div class="form-check">
//                   <input
//                     class="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="form2Example31"
//                     checked
//                   />

//                   <label class="form-check-label" for="form2Example31">
//                     {" "}
//                     Remember me{" "}
//                   </label>
//                 </div>
//                 <div class="col">
//                   <a href="#!">Forgot password?</a>
//                 </div>
//               </div>

//               <button class="btn btn-primary" 
//               // onClick={() => handleSubmit()}
//                >
//                 Login
//               </button>
//               <div class="text-center">
//                 <p>
//                   Not a member? <a onClick={() =>
                    
//   { handleClose(); handleOpen1() }} 
  
//   style={{ cursor: "pointer" }}>Register</a>
//                 </p>
//                 <div>Admin Credential : kishor@gmail.com</div>
//                 <div>Password : 4455</div>

//                 <div>For User, you can register</div>

//               </div>

//             </div>
//           </div>
//         </Box>
//       </Modal>

//       <Modal
//         open={open1}
//         onClose={handleClose1}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         hideBackdrop="true"
//         disableBackdropClick
//         disableEscapeKeyDown
//       >
//         {/* <Dialog onClose={handleClose} /> */}
//         <Box sx={style}>
//           <div
//             style={{
//               textAlign: "right",
//               fontSize: "34px",
//               position: "absolute",
//               top: "0",
//               right: "20px",
//               color: "black",
//               cursor: "pointer",
//             }}
//             onClick={handleClose1}
//           >
//             x
//           </div>

//           <div class="d-flex justify-content-between gty"  >
//             <div style={{ width: "50%" }}>
//               <img src="https://cdn.dribbble.com/users/988448/screenshots/5240042/icon_cadastro_v5.gif" />
//             </div>
//             <div style={{ width: "50%", height: "100%" }}>
//               <div>Name *</div>

//               <input
//                 style={{ width: "90%" }}
//                 value={rname}
//                 onChange={(e) => setRname(e.target.value)}
//               />
//               <div>Email *</div>

//               <input
//                 style={{ width: "90%" }}
//                 value={remail}
//                 onChange={(e) => setRemail(e.target.value)}
//               />



//               <div>Phone *</div>

//               <input style={{ width: "90%" }}
//                 value={rphone}
//                 onChange={(e) => setRphone(e.target.value)}
//               />


//               <div>Password *</div>

//               <input style={{ width: "90%" }}
//                 value={rpassword}
//                 type="password"
//                 onChange={(e) => setRpassword(e.target.value)}
//               />

//               {rshow && <div><i class="fa-solid fa-circle-exclamation" style={{ color: "red" }}></i><span style={{ color: "red", marginLeft: "10px" }}>{rerror}</span></div>}

//               <div class="col d-flex justify-content-center"></div>

//               <button class="btn btn-primary" onClick={() => userRegister()}>
//                 Register
//               </button>
//               <br />
//               <span>Already Have Account ! <a onClick={() => { handleClose1(); handleOpen() }} style={{ cursor: "pointer" }}>Login</a></span>
//             </div>
//           </div>
//         </Box>
//       </Modal>
//     </>
//   );
// };



