import React from 'react'
import './form.css';


export default function Form1({title, subTitle, placeholder1, placeholder2, placeholder3, placeholder4, inputType3 }) {
  return (
    <div className="formContactDiv">
      <h2>{title}</h2>
      <p className="para">
        Fill a request from with details of your {subTitle} Information
      </p>
      <form action="" className="formDetails">
        <div>
          <input type="text" placeholder={placeholder1} />
        </div>
        <div>
          <input type="text" placeholder={placeholder2} />
        </div>
        <div>
          <input type={inputType3} placeholder={placeholder3} />
        </div>
        <div>
          <input type="number" placeholder={placeholder4} />
        </div>
      </form>
      <button className="formBtn">Next</button>
    </div>
  );
}
