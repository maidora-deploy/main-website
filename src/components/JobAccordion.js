import React, { useState } from "react";
import jobs from "../assets/joblisting.json";
import "../assets/style.css";
import { CiCirclePlus } from "react-icons/ci";

const JobAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="job-accordion">
      {jobs.map((job, index) => (
        <div
          key={job.id}
          className={`job-item ${openIndex === index ? "active" : ""}`}
        >
          <button className="job-title" onClick={() => toggleAccordion(index)}>
            {job.title}
            <span className="arrow"><CiCirclePlus/></span>
          </button>

          <div className="job-content">
            <p>{job.shortDesc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobAccordion;
