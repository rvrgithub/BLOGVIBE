import React from "react";
import "../../Styles/homeBanner.css";
import { Link } from "react-router-dom";
export const HomeBaner = () => {
  return (
    <section className="section main-banner" id="top" data-section="section1">
      <video playsInline autoPlay muted loop id="bg-video">
        <source src="/assests/video/course-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="caption">
                <h1 style={{ color: "white" }}>Welcome to BlogVibe</h1>
                <h2> Amplify Your Blogging Pulse</h2>
                <p>
                  Discover the Art of Blogging with myBlog. Empower Your Voice.
                  Join a vibrant community, express your ideas, and inspire
                  readers worldwide with captivating blog posts. Unleash your
                  blogging potential today!"
                </p>
                <div className="main-button-red">
                  <div className="scroll-to-section">
                    <Link>Join Us Now!</Link>
                    {/* <a href="#contact"></a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
