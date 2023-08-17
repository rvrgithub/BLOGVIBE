import React from 'react'
import "../../Styles/fact.css"
export const Fact = () => {
  return (
    <section class="our-facts">
      <div class="container">
        <div class="row" style={{ display: "flex", justifyContent: "center" }}>
          <div class="col-lg-10">
            <div class="row">
              <div class="col-lg-12">
                <h2>A Few Facts About Our University</h2>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-12">
                    <div class="count-area-content percentage">
                      <div class="count-digit">Empowerment</div>
                      <div class="count-title">
                        Unlock your potential and unleash your voice with our
                        blog app.
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="count-area-content">
                      <div class="count-digit">Motivation</div>
                      <div class="count-title">
                        Fuel your creativity and inspire others through our
                        uplifting blog app.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5">
                <div class="row">
                  <div class="col-12">
                    <div class="count-area-content new-students">
                      <div class="count-digit">Growth</div>
                      <div class="count-title">
                        {" "}
                        Experience personal and professional growth as you share
                        your insights and ideas on our transformative blog app.
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="count-area-content">
                      <div class="count-digit">Upliftment</div>
                      <div class="count-title">
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
}
