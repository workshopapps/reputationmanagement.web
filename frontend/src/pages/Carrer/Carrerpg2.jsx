/** @format */

import React from "react";
import JobProps from "./JobProps";

function Carrerpg2() {
  return (
    <div>
      <section>
        <h1>All Open Positions</h1>
        <h5>
          If you see a position that makes your heart skip a beat, please apply.
          Come join us and help us build a global company to which we can be all
          proud of.
        </h5>
      </section>
      <section>
        <div className='search-box'>
          {/* search icon */}
          <input type='text' placeholder='Search job openings' />
          <select name='filter-jobs' id=''>
            <option value='' selected>
              Design
            </option>
            <option value=''>Engineer</option>
            <option value=''>Development</option>
            <option value=''>Marketing</option>
          </select>
          <button>Search</button>
        </div>
      </section>
      <section>
        <div>
          <h2>Browse Open Positions</h2>
          <div>
            <h3>Showing 1-12 of 70</h3>
            <button>Show all</button>
          </div>
        </div>
      </section>
      <section className='jobs-grid'>
        <JobProps title={"Software Engineer"} />
        <JobProps title={"Junior UX Designer"} />
        <JobProps title={"Senior UX Designer"} />
        <JobProps title={"Backend Developer"} />
        <JobProps title={"Full Stack Developer"} />
        <JobProps title={"Front-end Developer"} />
        <JobProps title={"Marketing Expert"} />
        <JobProps title={"Graphics Designer"} />
        <JobProps title={"Product Manager"} />
        <JobProps title={"Hardware Engineer"} />
        <JobProps title={"Sales Manager"} />
        <JobProps title={"System Manager"} />
      </section>
    </div>
  );
}

export default Carrerpg2;
