import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import "./intro.css";
import me from "./images/me1.jpg";
class intro extends Component {
  state = {
    text: " Hello World",
    intro: "I'm Viata Fredericks",
    avatar_url: me,
  };

  render() {
    const { avatar_url, intro } = this.state;
    return (
      <div className="intro">
        {" "}
        <ReactTypingEffect
          text={[
            "hello",
            "Molo",
            "Dumela",
            "Sanibonani",
            "Hallo",
            "Thobela",
            "Avuwani",
          ]}
        />
        <div className="container">
          <img src={avatar_url} alt="Me" className="project_img" />
          <h3 className="name">{intro}</h3>
          <p className="sub-heading">Junior Software developer</p>
        </div>
      </div>
    );
  }
}

export default intro;
