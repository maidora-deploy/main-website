import React from "react";
import { Link, useParams } from "react-router-dom";
import { news } from "../assets/newsData";
import DOMPurify from "dompurify";

const NewsDetail = () => {
  const { slug } = useParams();
  const New = news.find((n) => n.slug === slug);

  return (
    <article className="detail-page-template">
      <h1>{New.title}</h1>
      <div className="container">
        <img src={New.image} alt={New.title} />
         <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(New.content),
            }}
        />
        <Link to="/news" className="back-link">
          ← Back to Blogs
        </Link>
      </div>
    </article>
  );
};

export default NewsDetail;
