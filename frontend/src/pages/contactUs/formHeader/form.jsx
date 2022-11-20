import React from 'react'
import Form1 from '../form1/form';
import './form.css';
import personAvatar from "../../images/dpIcon1.svg";
import messageAvatar from "../../images/contactIcon.svg";
import textAvatar from "../../images/textIcon.svg";
import InfoDiv from '../infoDiv/infoDiv';


export default function Formheader() {
  return (
    <div className="topicContainer">
      <div className="formtopic">
        <p>Get started in 3 Easy Steps</p>
      </div>
      <div className="personalInfo">
        <div className="avatar1">
          <img src={personAvatar} alt="Personal Information Avatar" />
        </div>

        <div className="formComponent">
          <Form1
            title="#1 Personal Information"
            subTitle="personal"
            placeholder1="Name"
            placeholder2="Company/Organization"
            placeholder3="Email Address"
            placeholder4="Phone Number"
            inputType3="email"
          />
        </div>

        <div className="avatar1">
          <img src={messageAvatar} alt="Personal Information Avatar" />
        </div>
        <div className="formComponent">
          <Form1
            title="#2 Contact Information"
            subTitle="contact"
            placeholder1="Mailing Address"
            placeholder2="Country"
            placeholder3="City"
            placeholder4="Zip Code"
            inputType3="text"
          />
        </div>

        <div className="avatar2">
          <img src={textAvatar} alt="Personal Information Avatar" />
        </div>
        <div className="formContactDiv">
          <h2>#3 Message</h2>
          <p className="para">
            Kindly explain in detail the problem that you are currently
            experiencing
          </p>
          <form action="" className="formDetails">
            <textarea
              name="
           "
              id="areat"
            ></textarea>
          </form>
          <button className="formBtn">Next</button>
        </div>
      </div>
    </div>
  );
}
