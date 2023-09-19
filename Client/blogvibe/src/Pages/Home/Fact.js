import React from "react";
import "../../Styles/fact.css";
export const Fact = () => {
  return (
    <section className="our-facts">
      <div className="container">
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-12">
                <h2>A Few Facts About Our University</h2>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <div className="count-area-content percentage">
                      <div className="count-digit">Empowerment</div>
                      <div className="count-title">
                        Unlock your potential and unleash your voice with our
                        blog app.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content">
                      <div className="count-digit">Motivation</div>
                      <div className="count-title">
                        Fuel your creativity and inspire others through our
                        uplifting blog app.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row">
                  <div className="col-12">
                    <div className="count-area-content new-students">
                      <div className="count-digit">Growth</div>
                      <div className="count-title">
                        {" "}
                        Experience personal and professional growth as you share
                        your insights and ideas on our transformative blog app.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="count-area-content">
                      <div className="count-digit">Upliftment</div>
                      <div className="count-title">
                        Elevate your spirits and spread positivity through your
                        blog posts on our app.
                      </div>
                    </div>
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
