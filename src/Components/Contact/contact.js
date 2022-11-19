import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section
      className="container-xxl mx-xxl-auto text-center"
      id="contact_section"
    >
      <div className="card card-contact ">
        <div className="card-body contact-card-body">
          <h5 className="card-title contact-card-title text-center">
            Do you need a consultation?
          </h5>
          <p className="card-text contact-card-text text-center">
            Book one-on-one consultation sessions with our experts to learn more
            about your business rights.
          </p>
          <a href="#?" className="btn btn-primary" id="contact_us_button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
