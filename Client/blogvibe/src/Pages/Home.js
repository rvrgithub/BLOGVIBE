import React from "react";
// import { BlogCategory } from "../Components/Slider/BlogCategory";
// import { UserProfile } from "./UserProfile";
// import { Content } from "./Content";

export default function Home() {
  return (
    <>
      {/* <!-- ***** Main Banner Area Start ***** --> */}
      <section className="section main-banner" id="top" data-section="section1">
        <video playsInline autoPlay muted loop id="bg-video">
          <source src="/assets/images/course-video.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay header-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <h6>Welcome to BlogVibe</h6>
                  <h2> Amplify Your Blogging Pulse</h2>
                  <p>
                    Discover the Art of Blogging with myBlog. Empower Your
                    Voice. Join a vibrant community, express your ideas, and
                    inspire readers worldwide with captivating blog posts.
                    Unleash your blogging potential today!"
                  </p>
                  <div className="main-button-red">
                    <div className="scroll-to-section">
                      <a href="#contact">Join Us Now!</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ***** Main Banner Area End ***** --> */}

      {/* <section className="services">
        <div className="container">
          <BlogCategory />
        </div>
      </section> */}

    
      {/* <section className="upcoming-meetings" id="meetings">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Upcoming Meetings</h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories">
                <h4>Meeting Catgories</h4>
                <ul>
                  <li>
                    <a href="#">Sed tempus enim leo</a>
                  </li>
                  <li>
                    <a href="#">Aenean molestie quis</a>
                  </li>
                  <li>
                    <a href="#">Cras et metus vestibulum</a>
                  </li>
                  <li>
                    <a href="#">Nam et condimentum</a>
                  </li>
                  <li>
                    <a href="#">Phasellus nec sapien</a>
                  </li>
                </ul>
                <div className="main-button-red">
                  <a href="meetings.html">All Upcoming Meetings</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$22.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          src="assets/images/meeting-01.jpg"
                          alt="New Lecturer Meeting"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>10</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>New Lecturers Meeting</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$36.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          src="assets/images/meeting-02.jpg"
                          alt="Online Teaching"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>24</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Online Teaching Techniques</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$14.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          src="assets/images/meeting-03.jpg"
                          alt="Higher Education"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>26</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Higher Education Conference</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="meeting-item">
                    <div className="thumb">
                      <div className="price">
                        <span>$48.00</span>
                      </div>
                      <a href="meeting-details.html">
                        <img
                          src="assets/images/meeting-04.jpg"
                          alt="Student Training"
                        />
                      </a>
                    </div>
                    <div className="down-content">
                      <div className="date">
                        <h6>
                          Nov <span>30</span>
                        </h6>
                      </div>
                      <a href="meeting-details.html">
                        <h4>Student Training Meetup</h4>
                      </a>
                      <p>
                        Morbi in libero blandit lectus
                        <br />
                        cursus ullamcorper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Content/>
      <UserProfile /> */}

      {/* <section className="our-facts">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-12">
              <h2>A Few Facts About Our University</h2>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="count-area-content percentage">
                    <div className="count-digit">Empowerment</div>
                    <div className="count-title">Unlock your potential and unleash your voice with our blog app.</div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">Motivation</div>
                    <div className="count-title">Fuel your creativity and inspire others through our uplifting blog app.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12">
                  <div className="count-area-content new-students">
                    <div className="count-digit">Growth</div>
                    <div className="count-title"> Experience personal and professional growth as you share your insights and ideas on our transformative blog app.</div>
                  </div>
                </div> 
                <div className="col-12">
                  <div className="count-area-content">
                    <div className="count-digit">Upliftment</div>
                    <div className="count-title">Elevate your spirits and spread positivity through your blog posts on our app.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="col-lg-6 align-self-center">
          <div className="video">
           
          </div>
        </div>
      </div>
    </div>
  </section> */}
    </>
  );
}
