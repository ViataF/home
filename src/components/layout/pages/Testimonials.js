import React from "react";
import "./Testimonial.css";

const Testimonials = () => {
  return (
    <div className="container-testimonials">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="col s12 12m">
        <div className="card orange">
          <div className="card-content black-text">
            <span className="card-title testimonial">Mischa (collegue)</span>
            <p className="white-text">
              Viata is a driven, passionate and ambitious individual. She is
              always putting her best foot forward and let's no obstacles stand
              in her way. She also has a great sense of humor and works well
              with other. Viata is very focused and has a go getter attitude
              when it comes to achieving her goals. I believe she will be more
              than great in any work environment
            </p>
          </div>
        </div>
      </div>
      <div className="col s12">
        <div className="card green">
          <div className="card-content black-text">
            <span className="card-title testimonial">Doreen (collegue)</span>
            <p className="white-text">
              Viata Fredericks is a very dedicated individual who has shown
              great work , pay attention to details during her tasks and
              projects.She has prove herself that she has the ability and is
              capable of working on her own through stress and peer pressure.
            </p>
          </div>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="card blue">
          <div className="card-content black-text">
            <span className="card-title testimonial">
              Ntombekazi Sibetyu (collegue)
            </span>
            <p className="white-text">
              Viata is passionate and always willing to learn new skills.She is
              a hard working individual and very dedicated to her work, she puts
              in the effort and time to improve her work. She is a team player
              and very easy to work with as i have had the opportunity to work
              with her.
            </p>
          </div>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="card red">
          <div className="card-content black-text">
            <span className="card-title testimonial">
              Tyron Keet (collegue)
            </span>
            <p className="white-text">
              Viata is an overall, a brilliant developer with great potential.
              She's a born leader and communication well her team. Viata will be
              an asset to her workplace.
            </p>
          </div>
        </div>
      </div>
      <div className="col s12 m6">
        <div className="card purple">
          <div className="card-content black-text">
            <span className="card-title testimonial">
              Godwin Dzvapatsva (Head of Curriculum and Learning)
            </span>
            <p className="white-text">
              Viata has proven to be an all-rounder in software development. She
              was very professional and easy to work with throughout her stay at
              Lifechoices including being responsive. I recommend her without
              doubt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
