module.exports = (values) => {
	const {
		// Profile-Information
		firstname,
		lastname,
		email,
		phone,
		website,
		github,
		linkedin,
		twitter,
		facebook,
		instagram,

		// Education Information
		college,
		fromyear1,
		toyear1,
		qualification1,
		description1,
		school,
		fromyear2,
		toyear2,
		qualification2,
		description2,

		// Project Information...
		title1,
		link1,
		projectDescription1,
		title2,
		link2,
		projectDescription2,
		title3,
		link3,
		projectDescription3,

		// Experience Information
		institute1,
		position1,
		duration1,
		experienceDescription1,
		institute2,
		position2,
		duration2,
		experienceDescription2,

		// Extra Information
		skill1,
		skill2,
		skill3,
		skill4,
		skill5,
		skill6,
		interest1,
		interest2,
		interest3,
		interest4,
		interest5,
		interest6,
	} = values;

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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  background: white;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
}

body {
  min-height: 100%;
  background: #eee;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
}
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
.details .skills__item {
  margin-bottom: 10px;
}
.details .skills__item .right input {
  display: none;
}
.details .skills__item .right label {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #c3def3;
  border-radius: 20px;
  margin-right: 3px;
}
.details .skills__item .right input:checked + label {
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

    </style>
  </head>
  <body>

<div class="container">
  <div class="header">
    <div class="main__row">
      <div class="header__left">
        <div class="full-name">
          <span class="first-name">Anurag</span> 
          <span class="last-name">Arwalkar</span>
        </div>
        <div class="contact-info">
          <span class="email">Email: </span>
          <span class="email-val">anurag.arwalkar@globant.com</span>
        </div>
      </div>
      
      <div class="header__right">
        <img src="http://localhost:5500/globant_logo.png" alt="Globant Logo" srcset="">
      </div>
    </div>
    <hr />
    <div class="about">
      <span class="desc">
        I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. 
      </span>
    </div>
  </div>
   <div class="details">
    <div class="section">
      <div class="section__title">Skills</div>
      <div class="skills">
        <div class="skills__item">
          <div class="left"><div class="name">
            Javascript
            </div></div>
          <div class="right">
                         <input  id="ck1" type="checkbox" checked/>

            <label for="ck1"></label>
                         <input id="ck2" type="checkbox" checked/>

             <label for="ck2"></label>
                        <input id="ck3" type="checkbox" />

             <label for="ck3"></label>
                          <input id="ck4" type="checkbox" />
           <label for="ck4"></label>
                         <input id="ck5" type="checkbox" />
             <label for="ck5"></label>

          </div>
        </div>
      </div>
      </div>
    <div class="section">
      <div class="section__title">Experience</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">KlowdBox</div>
            <div class="addr">San Fr, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">UI Developer</div>
            <div class="desc">React/Angular</div>
          </div>
        </div>

      </div>
    </div>
    
     <div class="section">
      <div class="section__title">Projects</div> 
       <div class="section__list">
         <div class="section__list-item">
           <div class="name">Lorem ipsum</div>
           <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div>
         </div>
       </div>
    </div>
     <div class="section">
     <div class="section__title">
       Interests
       </div>
       <div class="section__list">
         <div class="section__list-item">
                  Football, programming.
          </div>
       </div>
     </div>

     <div class="section">
      <div class="section__title">Education</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Sample Institute of technology</div>
            <div class="addr">San Fr, CA</div>
          </div>
          <div class="right">
            <div class="education__duration">Jan 2011 - Feb 2015</div>
          </div>
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
