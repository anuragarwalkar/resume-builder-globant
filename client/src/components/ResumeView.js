import React from "react";
import "./resumeStyles.css";

function ResumeView() {
  return (
    <div className="resume-container">
      <div className="header">
        <div className="main__row">
          <div className="header__left">
            <div className="full-name">
              <span className="first-name">Anurag</span>
              <span className="last-name">Arwalkar</span>
            </div>
            <div className="contact-info">
              <span className="email">Email: </span>
              <span className="email-val">anurag.arwalkar@globant.com</span>
            </div>
          </div>

          <div className="header__right">
            <img
              src="http://localhost:5500/globant_logo.png"
              alt="Globant Logo"
            />
          </div>
        </div>
        <hr />
        <div className="about">
          <span className="desc">
            I am a front-end developer with more than 3 years of experience
            writing html, css, and js. I'm motivated, result-focused and seeking
            a successful team-oriented company with opportunity to grow.
          </span>
        </div>
      </div>
      <div className="details">
        <div className="section">
          <div className="section__title">Skills</div>
          <div className="skills">
            <div className="skills__item">
              <div className="left">
                <div className="name">Javascript</div>
              </div>
              <div className="right">
                <input id="ck1" type="checkbox" checked onChange={() => {}} />

                <label htmlFor="ck1"></label>
                <input id="ck2" type="checkbox" checked onChange={() => {}} />

                <label htmlFor="ck2"></label>
                <input id="ck3" type="checkbox" />

                <label htmlFor="ck3"></label>
                <input id="ck4" type="checkbox" />
                <label htmlFor="ck4"></label>
                <input id="ck5" type="checkbox" />
                <label htmlFor="ck5"></label>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section__title">Experience</div>
          <div className="section__list">
            <div className="section__list-item">
              <div className="left">
                <div className="name">KlowdBox</div>
                <div className="addr">San Fr, CA</div>
                <div className="duration">Jan 2011 - Feb 2015</div>
              </div>
              <div className="right">
                <div className="name">UI Developer</div>
                <div className="desc">React/Angular</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section__title">Projects</div>
          <div className="section__list">
            <div className="section__list-item">
              <div className="name">Lorem ipsum</div>
              <div className="text">
                I am a front-end developer with more than 3 years of experience
                writing html, css, and js. I'm motivated, result-focused and
                seeking a successful team-oriented company with opportunity to
                grow.
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section__title">Interests</div>
          <div className="section__list">
            <div className="section__list-item">Football, programming.</div>
          </div>
        </div>

        <div className="section">
          <div className="section__title">Education</div>
          <div className="section__list">
            <div className="section__list-item">
              <div className="left">
                <div className="name">Sample Institute of technology</div>
                <div className="addr">San Fr, CA</div>
              </div>
              <div className="right">
                <div className="education__duration">Jan 2011 - Feb 2015</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeView;
