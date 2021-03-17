import React, { Component } from "react";
import PortfolioItem from "./PortfolioItems";

import github_finder from "./images/github_finder.jpg";
import it_logger from "./images/it-logger.PNG";
import contact_keeper from "./images/Login-system.PNG";
import seekers_and_finders from "./images/seekers&finders.PNG";
import login_system from "./images/login.PNG";
import lotto from "./images/lotto.PNG";
import "./Portfolio.css";

class Portfolio extends Component {
  state = {
    title: "Viata Fredericks Portfolio",
    portfolios: [
      {
        id: 1,
        project_url: "https://seekers-and-finders.herokuapp.com/",
        repo: "https://github.com/ViataF/Shopping-time",
        project_img: seekers_and_finders,
        project_name: "Seekers & Finders",
        project:
          "React app to create find businesses and shops.This app connects businesses to customers. ",
      },
      {
        id: 2,
        project_url: "https://githubfinder3465.netlify.app/",
        repo: "https://github.com/ViataF/Github_Finder",
        project_img: github_finder,
        project_name: "Github finder",
        project:
          "React app to search Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management and is part of the Modern React Front To Back Udemy course",
      },

      {
        id: 3,
        project_url: "https://it-logger-1.netlify.app/",
        repo: "https://github.com/ViataF/IT-LOGGER",
        project_img: it_logger,
        project_name: "IT Logger",
        project:
          " React app to track IT department tasks and issues. Uses JSON-Server as a mock backend. ",
      },

      {
        id: 4,
        project_url: "https://contact-keeper210.herokuapp.com/",
        repo: "https://github.com/ViataF/LoginSystem",
        project_img: contact_keeper,
        project_name: "Contact Keeper",
        project:
          " Full stack MERN contact manager with React hooks, context & JWT authentication. ",
      },

      {
        id: 5,
        project_url: "",
        repo: "https://github.com/ViataF/Login-logout-python",
        project_img: login_system,
        project_name: "Python Login & out system",
        project:
          "Python project that controls who enters and exits the building via a login, logout and register system",
      },
      {
        id: 6,
        project_url:
          "https://drive.google.com/drive/folders/1dBSzsm4a2_KW_1nD35kFNUd12MHvJAcu?usp=sharing",
        repo: "https://github.com/ViataF/Lotto_python_project",
        project_img: lotto,
        project_name: "Lotto Draw",
        project:
          "Python project: Lotto. Adults pick 6 numbers and get a cash reward if they get correct numbers ",
      },
    ],
  };

  render() {
    return (
      <div className="portfolio">
        <h2 className="portfolio-heading">{this.state.title}</h2>
        <div className="container" id="portfolio">
          {this.state.portfolios.map((portfolio) => (
            <PortfolioItem key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    );
  }
}


export default Portfolio;
