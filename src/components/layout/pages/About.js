import React from "react";
import "./About.css";
import portrait from "./images/me1.jpg";
const About = () => {
  return (
    <div className=" about ">
      <div></div>
      <h2 className="heading">My Profile</h2>
      <section className="details">
        <img src={portrait} alt="portrait of self" className="profile_img" />

        <ul className="basic-details">
          <li className="name"> Viata Fredericks</li>
          <li>
            <span>Age: </span> 19
          </li>
          <li>
            <span>Gender: </span> Female
          </li>
          <li>
            <span> Location: </span> Wynberg, Cape Town
          </li>
          <li>
            <span> Nationality: </span>
            South African
          </li>
          <li>
            <span> Passion Board: </span>
            Reading ebooks, Walking, Playing Viola , Baking, Swimming
          </li>
          <li>
            <span>Bio:</span> I am a hardworking and highly dedicated
            individual. I embrace new challenges and love to explore new
            opportunities. My purpose is to broaden my knowledge and develop new
            skills.
          </li>
        </ul>
      </section>

      <section className="center"></section>
      <section className="techPassion">
        <h3 className="passion">Initial Passion</h3>
        <p className="initial-passion">
          I was exposed to coding during high school via a business called Code 4
          Cape Town. I have always had a knack for computers and people always
          asked me to assist them with their challenges concerning computers and
          cell phones.
        </p>
        <section className="skillbar">
          <h3 className="skills-heading center"> Skills Matrix</h3>
          <p className="language">HTML</p>
          <div className="container-skillbar">
            <div className="skills html">80%</div>
          </div>
          <p className="language">CSS</p>
          <div className="container-skillbar">
            <div className="skills css">75%</div>
          </div>
          <p className="language">Python</p>
          <div className="container-skillbar">
            <div className="skills python">60%</div>
          </div>
          <p className="language">JavaScript</p>
          <div className="container-skillbar">
            <div className="skills js">60%</div>
          </div>
          <p className="language">Angular</p>
          <div className="container-skillbar">
            <div className="skills angular">55%</div>
          </div>
          <p className="language">NodeJS and ExpressJS</p>
          <div className="container-skillbar">
            <div className="skills node">60%</div>
          </div>
          <p className="language">GitLab</p>
          <div className="container-skillbar">
            <div className="skills git">70%</div>
          </div>
          <p className="language">Agile</p>
          <div className="container-skillbar">
            <div className="skills agile">60%</div>
          </div>
        </section>
      </section>

      <div className="timeline center">
        <div className="card timeline-content">
          <div className="card-content">
            <span className="card-title activator ">
              <i className="material-icons blue-text">school</i> Education
            </span>
            <ul>
            <li className="content">
              Matric (year and school): Claremont High School (2019)
            </li>
            {" "}
            <li className="content">
             Bootcamp: Life Choices Academy (2019 - 2020)
            </li>
            </ul>
          </div>
        </div>
        <div className="card timeline-content">
          <div className="card-content">
            <span className="card-title activator">
              <i className="material-icons green-text">work</i> Work experience
            </span>
            <p className="content">
              {" "}
              Internship: Digioutsource - Software Development
            </p>
            <p> <span>Duration:</span>  01 September 2020 – 28 February 2021</p>
            <p>  <span>Focus Areas: </span>Html, CSS, SASS, Javascript, JQuery, Angular,
              ExpressJS, JSON, Nodejs, C#, Asp.Net, TypeScript, SDLC, Agile 
              Methodologies, Source Control (GitLab), WebApi Development,
              MongoDB</p>
          </div>
        </div>

        <div className="card timeline-content activator">
          <div className="card-content activator">
            <span className="card-title activator ">
              <i className="material-icons red-text">favorite</i> Voluntary Work
            </span>
            <p className="content ">Company: PlumPets Period: 2018 </p>
              Duties(PlumPets):
            <ul>
              <li> # Taking dogs for walks</li>
            </ul>
     

       
            <p className="content ">
              Company: Parkhaven Senior Citizen (Wynberg) Period: 2018
            </p>
            Duties(Parkhaven):
            <ul >
              
              <li> # Helped to clean</li>
              <li> # Helped to serve food</li>
              <li> # Spending time with elderly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
