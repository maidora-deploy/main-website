import React from "react";
import { Link, useParams } from "react-router-dom";
import { caseStudy } from "../assets/casestudyData";
import DOMPurify from "dompurify";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const Case = caseStudy.find((c) => c.slug === slug);

  return (
    <article className="detail-page-template">
      <h1>{Case.title}</h1>
      <div className="container">
        <img src={Case.image} alt={Case.title} />
         <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(Case.content),
            }}
        />
        <Link to="/case-study" className="back-link">
          ← Back to Blogs
        </Link>
      </div>
    </article>
  );
};

export default CaseStudyDetail;
