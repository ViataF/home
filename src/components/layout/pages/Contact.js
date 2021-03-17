import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  render() {
    const { status } = this.state;
    return (
      <div className="container-contact">
        <h2 className="contact">Contact me</h2>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mgennzln"
          method="POST"
        >
          <label className="form-labels">Email:</label>
          <input
            type="email"
            name="email"
            className="email"
            style={{ borderBottom: "black solid" }}
          />
          <label className="form-labels">Message:</label>
          <input
            type="text"
            name="message"
            style={{ borderBottom: "black solid" }}
          />
          {status === "SUCCESS" ? (
            <p>Thanks!, Please reload to submit another response</p>
          ) : (
            <button className="btn btn-small submit">
              Submit <i className="material-icons right">send</i>
            </button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>

        <div
          className="card transparent links
        "
        >
          <div className="card-action links">
            <a
              target="__blank"
              href="https://github.com/ViataF"
              className="waves-effect waves-light btn-large link grey darken-3"
            >
              <i className="fa fa-github" /> Github account
            </a>
            <a
              target="__blank"
              href="https://za.linkedin.com/in/viata-fredericks-2580151ab"
              className="waves-effect waves-light btn-large link  light-blue darken-4 "
            >
              <i className="fa fa-linkedin" /> Linkedin account
            </a>
            <a
              target="__blank"
              href="mailto:viataruth@gmail.com"
              className="waves-effect waves-light btn-large  link deep-orange darken-3"
            >
              <i className="fa fa-google" /> Gmail account
            </a>
            <span className="waves-effect waves-light btn-large link red darken-3">
              tel: 0812379785
            </span>
          </div>
        </div>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
export default Contact;
