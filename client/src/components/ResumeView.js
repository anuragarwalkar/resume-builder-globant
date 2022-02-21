import React from 'react'
import './resumeStyles.css'

function ResumeView() {
  return (
    <div class="resume-container">
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
        <img src="http://localhost:5500/globant_logo.png" alt="Globant Logo"  />
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
  )
}

export default ResumeView