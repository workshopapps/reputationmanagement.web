import React from 'react'
import personAvatar from "../../images/contactIcon.svg";


export default function InfoDiv({contactTitle, contactSubTitle}) {
  return (
    <div>
      <div className="personalInfo">
        <div className="avatar1">
          <img src={personAvatar} alt="Personal Information Avatar" />
        </div>
      </div>
      <div className="formContactDiv">
        <h2>{contactTitle}</h2>
        <p className="para">
          Fill a request from with details of your {contactSubTitle} Information
        </p>
      </div>
    </div>
  );
}
