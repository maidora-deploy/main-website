import {React, useState} from 'react';
import {Link, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";
import { news } from "../assets/newsData";
import { IoIosArrowRoundForward } from "react-icons/io";

const News = () =>{
   const navigate = useNavigate();
   const [pageNews, setPageNews] = useState(1);
   const itemsPerPage = 20;

   const paginate = (data, pageNumber) => {
    const start = (pageNumber - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  };

  const handleCardClick = (slug) => {
    navigate(`/news/${slug}`);
  };

   return(
    <div className="blog-page-template">
      <section className="hero-section">
         <p>Resource</p>
         <h3>News</h3>
      </section>
      <div className="container">
        <div className="b-l-row">
        {paginate(news, pageNews).map((n, index) => (
          <div
            key={n.id || n.slug || index}
            className="b-l-col-4 blog-card"
            onClick={() => handleCardClick(n.slug)}
          >
            <div className='blog-feaured-img'>
              <img src={n.image} alt={n.title} className="blog-img" />
            </div>
            <div className="blog-description">
              <h4>{n.title}</h4>
              <Link onClick={() => handleCardClick(n.slug)}>Explore <IoIosArrowRoundForward /></Link>
            </div>
          </div>
        ))}
      </div>

        <Pagination
          total={Math.ceil(news.length / itemsPerPage)}
          current={pageNews}
          onChange={setPageNews}
        />
      </div>
    </div>
   )
}

export default News;