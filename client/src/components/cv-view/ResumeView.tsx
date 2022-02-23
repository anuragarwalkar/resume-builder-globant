import { Fragment } from "react";
import { useAppSelector } from "../../app/hooks";
import "./resumeStyles.css";

function ProjectView({ name, description }: any) {
  return (
    <div className="section__list">
      <div className="section__list-item">
        <div className="name">{name}</div>
        <div className="text">\{description}</div>
      </div>
    </div>
  );
}

function ResumeView() {
  const { name, email, description } = useAppSelector(
    (state) => state.profile.details
  );
  const skills = useAppSelector((state) => state.extra.skills);
  const projects = useAppSelector((state) => state.project.projects);

  const getRating = (skill: any) => {
    const items = new Array(skill.totalRating).fill(null);

    return items.map((_, index) => {
      return (
        <Fragment key={`${skill.name}-${index}`}>
          <input
            id={`${skill.name}-${index}`}
            type="checkbox"
            defaultChecked={index + 1 <= skill.rating}
            readOnly
            disabled
          />
          <label htmlFor={`${skill.name}-${index}`}></label>
        </Fragment>
      );
    });
  };

  return (
    <div className="resume-container">
      <div className="header">
        <div className="main__row">
          <div className="header__left">
            <div className="full-name">
              <span className="first-name">{name}</span>
            </div>
            <div className="contact-info">
              <span className="email">Email: </span>
              <span className="email-val">{email}</span>
            </div>
          </div>

          <div className="header__right">
            <img src="/globant_logo_main.png" alt="Globant Logo" />
          </div>
        </div>
        <hr />
        <div className="about">
          <span className="desc">{description}</span>
        </div>
      </div>
      <div className="details">
        <div className="section">
          <div className="section__title">Skills</div>
          <div className="skills">
            {skills.map((skill: any) => {
              return (
                <div key={skill.name} className="skills__item">
                  <div className="left">
                    <div className="name">{skill.name}</div>
                  </div>
                  <div className="right">{getRating(skill)}</div>
                </div>
              );
            })}
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
          {projects.map((project: any) => {
            return (
              <ProjectView
                name={project.name}
                description={project.description}
              />
            );
          })}
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
