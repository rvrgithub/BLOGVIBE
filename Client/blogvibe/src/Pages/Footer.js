import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiTwotoneMail } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { RiWhatsappFill } from "react-icons/ri";

export const Footer = () => {
    return (
        <div className=" my-5" style={{ width: "100%", background: "red" }}>
            <footer
                className="text-center text-white"
                style={{ backgroundColor: "#f1f1f1", width: "100%" }}
            >
                <div className="container pt-1" style={{ width: "100%" }}>
                    <section className="mb-4">
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-2"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            style={{
                                fontSize: "35px",
                                marginTop: "10px",
                            }}
                        >
                            <RiWhatsappFill />
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-2"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            style={{ fontSize: "35px", marginTop: "10px" }}
                        >
                            <AiTwotoneMail />
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-2"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            style={{ fontSize: "35px", marginTop: "10px" }}
                        >
                            <AiFillInstagram />
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-2"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            style={{ fontSize: "35px", marginTop: "10px" }}
                        >
                            <AiFillLinkedin />
                            <i className="fab fa-instagram" style={{ marginTop: "10px" }}></i>
                        </a>

                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-2"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            style={{
                                fontSize: "35px",
                                marginTop: "10px",
                            }}
                        >
                            <BsFacebook />
                        </a>
                        <a
                            className="btn btn-link btn-floating btn-lg text-dark m-2"
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            style={{ fontSize: "35px", marginTop: "10px" }}
                        >
                            <BsGithub />
                        </a>
                    </section>
                </div>

                <div
                    className="text-center text-dark p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2023 Copyright :
                    <a className="text-dark" href="https://kishordeveloper.com/">
                        Radhika{" "}
                        <i className="fa-solid fa-heart fa-flip" style={{ color: "#dd0808" }}>
                            {" "}
                        </i>{" "}
                        Verma
                    </a>
                </div>
            </footer>
        </div>
    );
}
