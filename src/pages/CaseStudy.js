import {React, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { caseStudy } from "../assets/casestudyData";
import { IoIosArrowRoundForward } from "react-icons/io";

const CaseStudy = () =>{
  const navigate = useNavigate();
    const [pageCaseStudy, setPageCaseStudy] = useState(1);
    const itemsPerPage = 20;
  
    const paginate = (data, pageNumber) => {
      const start = (pageNumber - 1) * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    };
  
    const handleCardClick = (slug) => {
      navigate(`/case-study/${slug}`);
    };

  return(
    <div className="blog-page-template">
      <section className="hero-section">
        <p>Resource</p>
        <h3>Case Study</h3>
      </section>
      <div className="container">
        <div className="b-l-row">
        {paginate(caseStudy, pageCaseStudy).map((c, index) => (
          <div
            key={c.id || c.slug || index}
            className="b-l-col-4 blog-card"
            onClick={() => handleCardClick(c.slug)}
          >
            <div className='blog-feaured-img'>
              <img src={c.image} alt={c.title} className="blog-img" />
            </div>
            <div className="blog-description">
              <h4>{c.title}</h4>
              <Link onClick={() => handleCardClick(c.slug)}>Explore <IoIosArrowRoundForward /></Link>
            </div>
          </div>
        ))}
      </div>

        <Pagination
          total={Math.ceil(caseStudy.length / itemsPerPage)}
          current={pageCaseStudy}
          onChange={setPageCaseStudy}
        />
      </div>
    </div>
  )
}

export default CaseStudy;