import parse from "html-react-parser";
import moment from "moment";
import { useMemo } from "react";
import { useAppSelector } from "../../app/hooks";
import { AppRating } from "../../hoc/app-rating.component";
import "./resumeStyles.css";

function EducationView({ collegeUniversity, location, fromYear, toYear }: any) {
  const formatedFrom = useMemo(
    () => moment(new Date(fromYear)).format("MMM yyy"),
    [fromYear]
  );
  const formatedTo = useMemo(
    () => moment(new Date(toYear)).format("MMM yyy"),
    [toYear]
  );
  return (
    <div className="section__list-item">
      <div className="left">
        <div className="name">{collegeUniversity}</div>
        <div className="addr">{location}</div>
      </div>
      <div className="right">
        <div className="education__duration">
          {formatedFrom} - {formatedTo}
        </div>
      </div>
    </div>
  );
}

function ProjectView({ name, description }: any) {
  return (
    <div className="section__list">
      <div className="section__list-item">
        <div className="name">{name}</div>
        <div className="text">{parse(description)}</div>
      </div>
    </div>
  );
}

function ExperienceView({
  organization,
  location,
  from,
  to,
  position,
  description,
}: any) {
  const formatedFrom = useMemo(
    () => moment(new Date(from)).format("MMM yyy"),
    [from]
  );
  const formatedTo = useMemo(
    () => moment(new Date(to)).format("MMM yyy"),
    [to]
  );

  return (
    <div className="section__list-item">
      <div className="left">
        <div className="name">{organization}</div>
        <div className="addr">{location}</div>
        <div className="duration">
          {formatedFrom} - {formatedTo}
        </div>
      </div>
      <div className="right">
        <div className="name">{position}</div>
        <div className="desc">{description}</div>
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
  const experiences = useAppSelector((state) => state.experience.experiences);
  const educations = useAppSelector((state) => state.education.educations);
  const interests = useAppSelector((state) => state.extra.interests);

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
                  <AppRating
                    name={skill.name}
                    totalRating={skill.totalRating}
                    rating={skill.rating}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="section">
          <div className="section__title">Experience</div>
          <div className="section__list">
            {experiences.map((experience: any) => {
              return <ExperienceView key={experience.id} {...experience} />;
            })}
          </div>
        </div>

        <div className="section">
          <div className="section__title">Projects</div>
          {projects.map((project: any) => {
            return (
              <ProjectView
                key={project.id}
                name={project.title}
                description={project.description}
              />
            );
          })}
        </div>
        <div className="section">
          <div className="section__title">Interests</div>
          <div className="section__list">
            <div className="section__list-item">
              {interests.map((interest: any, index: number) => (
                <span key={interest.id}>
                  {interest.name}
                  {index + 1 === interests.length ? "." : ", "}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section__title">Education</div>
          <div className="section__list">
            {educations.map((education: any) => {
              return <EducationView key={education.id} {...education} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeView;
