import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../assets/blogData";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  return (
    <article className="detail-page-template">
      <h1>{blog.title}</h1>
      <div className="container">
        <img src={blog.image} alt={blog.title} />
         <div
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.content),
            }}
        />
        <Link to="/blog" className="back-link">
          ← Back to Blogs
        </Link>
      </div>
    </article>
  );
};

export default BlogDetail;
