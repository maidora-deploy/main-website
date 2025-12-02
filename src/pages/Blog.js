import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { blogs } from "../assets/blogData";
import { IoIosArrowRoundForward } from "react-icons/io";

const Blog = () => {
  const navigate = useNavigate();
  const [pageBlog, setPageBlog] = useState(1);
  const itemsPerPage = 20;

  const paginate = (data, pageNumber) => {
    const start = (pageNumber - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  };

  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="blog-page-template">
      <section className="hero-section">
        <p>Resource</p>
        <h3>Blogs</h3>
      </section>
      <div className="container">
        <div className="b-l-row">
        {paginate(blogs, pageBlog).map((b, index) => (
          <div
            key={b.id || b.slug || index}
            className="b-l-col-4 blog-card"
            onClick={() => handleCardClick(b.slug)}
          >
            <div className='blog-feaured-img'>
                <img src={b.image} alt={b.title} className="blog-img" />
            </div>
            <div className="blog-description">
              <h4>{b.title}</h4>
              <Link onClick={() => handleCardClick(b.slug)}>Explore <IoIosArrowRoundForward /></Link>
            </div>
          </div>
        ))}
      </div>

        <Pagination
          total={Math.ceil(blogs.length / itemsPerPage)}
          current={pageBlog}
          onChange={setPageBlog}
        />
      </div>
    </div>
  );
};

export default Blog;
