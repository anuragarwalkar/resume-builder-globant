module.exports = () => {
  let htmlTemplate = `
	<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Anurag Arwalkar Resume</title>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
    <!-- <link rel="stylesheet" href="style.css"> -->

	<style>
  .container {
    background: #fff;
    box-shadow: 1px 1px 2px #dad7d7;
    border-radius: 3px;
    padding: 35px;
  }
  .header {
    margin-bottom: 30px;
  }
  .header .full-name {
    font-size: 1.34rem;
  }
  
  .header .email,
  .header .phone {
    color: #999;
    font-weight: 300;
  }
  .header .separator {
    height: 10px;
    display: inline-block;
    border-left: 2px solid #999;
    margin: 0px 10px;
  }
  .header .position {
    font-weight: bold;
    display: inline-block;
  }
  .details {
    line-height: 20px;
  }
  .details .section {
    margin-bottom: 40px;
  }
  .details .section:last-of-type {
    margin-bottom: 0px;
  }
  .details .section__title {
    letter-spacing: 2px;
    color: #54afe4;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  .details .section__list-item {
    margin-bottom: 20px;
  }
  .details .section__list-item:last-of-type {
    margin-bottom: 0;
  }
  .details .left,
  .details .right {
    vertical-align: top;
    display: inline-block;
  }
  .details .left {
    width: 60%;
  }
  .details .right {
    text-align: left;
    width: 39%;
  }
  .details .name {
    font-weight: bold;
  }
  .details a {
    text-decoration: none;
    color: #000;
    font-style: italic;
  }
  .details a:hover {
    text-decoration: underline;
    color: #000;
  }
  .skills__item {
    margin-bottom: 10px;
  }
  .right input {
    display: none;
  }
  .right label {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #c3def3;
    border-radius: 20px;
    margin-right: 3px;
  }
  .right input:checked + label {
    background: #79a9ce;
  }
  
  .main__row {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    justify-content: space-between;
  }
  
  .header__right img {
    width: 150px;
  }
  
  .main__row {
    margin-bottom: 10px;
  }
  
  .about {
    margin-top: 10px;
  }
  
  .education__duration {
    text-align: center;
  }
  
  .section__list-item > .text > p {
    margin: 3px 0;
  }
  
  .section__title:hover {
    cursor: pointer;
  }
  
    </style>
  </head>
  <body>
  <div class="resume-container">
  <div class="header">
    <div class="main__row">
      <div class="header__left">
        <div class="full-name">
          <span class="first-name" id="profile">Anurag Arwalkar</span>
        </div>
        <div class="contact-info">
          <span class="email">Email: </span
          ><span class="email-val">anurag.arwalkar@globant.com</span>
        </div>
      </div>
      <div class="header__right">
        <img src="/globant_logo_main.png" alt="Globant Logo" />
      </div>
    </div>
    <hr />
    <div class="about">
      <span class="desc"
        >A self-motivated IT professional is having experience with JavaScript
        for developing web and cross-platform mobile applications, as well as
        strong skills and the ability in writing clean and efficient code. Check
        out my GitHub account for more info
      </span>
    </div>
  </div>
  <div class="details">
    <div class="section">
      <div class="section__title" id="skills">Skills</div>
      <div class="skills">
        <div class="skills__item">
          <div class="left"><div class="name">Angular</div></div>
          <div class="right">
            <input
              type="checkbox"
              id="e7984193-fac8-42ba-a21c-430f2b9a6e13"
              checked=""
              disabled=""
            /><label for="e7984193-fac8-42ba-a21c-430f2b9a6e13"></label
            ><input
              type="checkbox"
              id="c1a26516-0760-43d1-b550-f0173640ccdb"
              checked=""
              disabled=""
            /><label for="c1a26516-0760-43d1-b550-f0173640ccdb"></label
            ><input
              type="checkbox"
              id="4c7876d2-063e-4b5f-91f4-c10b0218c60d"
              checked=""
              disabled=""
            /><label for="4c7876d2-063e-4b5f-91f4-c10b0218c60d"></label
            ><input
              type="checkbox"
              id="f1491d92-6d10-47df-9025-79a6664968ab"
              disabled=""
            /><label for="f1491d92-6d10-47df-9025-79a6664968ab"></label
            ><input
              type="checkbox"
              id="b248f630-2efd-4a57-8d91-0a60b44399dd"
              disabled=""
            /><label for="b248f630-2efd-4a57-8d91-0a60b44399dd"></label>
          </div>
        </div>
        <div class="skills__item">
          <div class="left"><div class="name">React.js</div></div>
          <div class="right">
            <input
              type="checkbox"
              id="71e3d152-eaa1-4b56-bb36-bc1907776a5a"
              checked=""
              disabled=""
            /><label for="71e3d152-eaa1-4b56-bb36-bc1907776a5a"></label
            ><input
              type="checkbox"
              id="31c1b6ea-640f-4c6c-9cbd-25d2a0bbbe55"
              checked=""
              disabled=""
            /><label for="31c1b6ea-640f-4c6c-9cbd-25d2a0bbbe55"></label
            ><input
              type="checkbox"
              id="34b4dc50-8b6f-4f0f-b5b3-4fcf533df329"
              checked=""
              disabled=""
            /><label for="34b4dc50-8b6f-4f0f-b5b3-4fcf533df329"></label
            ><input
              type="checkbox"
              id="cbd349d1-c76b-4529-8831-2bb597013682"
              checked=""
              disabled=""
            /><label for="cbd349d1-c76b-4529-8831-2bb597013682"></label
            ><input
              type="checkbox"
              id="5dde7bf9-c83e-418b-89ab-70f37bbad7c6"
              checked=""
              disabled=""
            /><label for="5dde7bf9-c83e-418b-89ab-70f37bbad7c6"></label>
          </div>
        </div>
        <div class="skills__item">
          <div class="left"><div class="name">JavaScript</div></div>
          <div class="right">
            <input
              type="checkbox"
              id="bb650bba-eb12-4992-b724-aa530f931e77"
              checked=""
              disabled=""
            /><label for="bb650bba-eb12-4992-b724-aa530f931e77"></label
            ><input
              type="checkbox"
              id="451668d5-7dc9-41ae-9718-a4202b94a73e"
              checked=""
              disabled=""
            /><label for="451668d5-7dc9-41ae-9718-a4202b94a73e"></label
            ><input
              type="checkbox"
              id="64100a38-3874-4e3b-877f-51c5c43b0dd6"
              checked=""
              disabled=""
            /><label for="64100a38-3874-4e3b-877f-51c5c43b0dd6"></label
            ><input
              type="checkbox"
              id="cfa36194-8083-42dd-8387-41904985158a"
              checked=""
              disabled=""
            /><label for="cfa36194-8083-42dd-8387-41904985158a"></label
            ><input
              type="checkbox"
              id="ecdd138f-e8d0-4452-93cb-a8dbf774a70e"
              checked=""
              disabled=""
            /><label for="ecdd138f-e8d0-4452-93cb-a8dbf774a70e"></label>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__title" id="experience">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Synerzip Softech</div>
            <div class="addr">Pune</div>
            <div class="duration">Jan 2022 - Feb 2022</div>
          </div>
          <div class="right">
            <div class="name">Sr. Software Engineer</div>
            <div class="desc">Flutter</div>
          </div>
        </div>
        <div class="section__list-item">
          <div class="left">
            <div class="name">Zensar Technologies</div>
            <div class="addr">Pune</div>
            <div class="duration">Feb 2022 - Feb 2022</div>
          </div>
          <div class="right">
            <div class="name">Software Enginner</div>
            <div class="desc">Angula/React</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__title" id="projects">Projects</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="name">CPDM NG (Cisco Systems)</div>
          <div class="text">
            <p>
              I am a front-end developer with more than 3 years of experience
              writing html, css, and js. I&#x27;m motivated, result-focused and
              seeking a successful team-oriented company with opportunity to
              grow.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__title" id="interests">Interests</div>
      <div class="section__list">
        <div class="section__list-item">
          <span>IOT, </span><span>Photography.</span>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__title" id="education">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">H.V Desai College</div>
            <div class="addr">Pune</div>
          </div>
          <div class="right">
            <div class="education__duration">Feb 2022 - Feb 2022</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </body>
</html>
	`;
  return htmlTemplate;
};
