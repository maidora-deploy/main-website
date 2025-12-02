import React, { useState } from "react";
import "../assets/tabs.css"; 
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { MdOutlineCallMade } from "react-icons/md";

const TabsWithPagination = () => {
  const blogs = Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    title: `Blog ${i + 1}`,
    desc: "This is a short description for the blog post.",
    img: "https://cdn.pixabay.com/photo/2017/09/29/15/40/cleanliness-2799470_1280.jpg",
  }));

  const cases = Array.from({ length: 32 }, (_, i) => ({
    id: i + 1,
    title: `Case Study ${i + 1}`,
    desc: "This is a case study description.",
    img: "https://cdn.pixabay.com/photo/2017/09/29/15/40/cleanliness-2799470_1280.jpg",
  }));

  const news = Array.from({ length: 27 }, (_, i) => ({
    id: i + 1,
    title: `News ${i + 1}`,
    desc: "Latest news article summary.",
    img: "https://cdn.pixabay.com/photo/2017/09/29/15/40/cleanliness-2799470_1280.jpg",
  }));

  const ITEMS_PER_PAGE = 10;

  // Separate pagination states for each tab
  const [pageBlog, setPageBlog] = useState(1);
  const [pageCase, setPageCase] = useState(1);
  const [pageNews, setPageNews] = useState(1);

  // Pagination logic
  const paginate = (data, page) => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return data.slice(start, start + ITEMS_PER_PAGE);
  };

  // Calculate total pages
  const totalPages = (data) => Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="tabs-wrap">
      <div className="tabs-content">
        {/* Tab 1 - Blogs */}
        <div className="tab-panel active">
          <h3>Blogs</h3>
          <div className="row">
            {paginate(blogs, pageBlog).map((b) => (
              <div key={b.id} className="col-md-4">
                <img src={b.img} alt={b.title} />
                <div className="text-description">
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
                <Link to="/blog">Explore <MdOutlineCallMade /></Link>
              </div>
            ))}
          </div>
          <Pagination
            total={totalPages(blogs)}
            current={pageBlog}
            onChange={setPageBlog}
          />
        </div>

        {/* Tab 2 - Case Studies */}
        <div className="tab-panel active">
          <h3>Case Studies</h3>
          <div className="row">
            {paginate(cases, pageCase).map((c) => (
              <div key={c.id} className="col-md-4">
                <img src={c.img} alt={c.title} />
                <div className="text-description">
                  <h4>{c.title}</h4>
                  <p>{c.desc}</p>
                </div>
                <Link to="/case-study">Explore <MdOutlineCallMade /></Link>
              </div>
            ))}
          </div>
          <Pagination
            total={totalPages(cases)}
            current={pageCase}
            onChange={setPageCase}
          />
        </div>

        {/* Tab 3 - News */}
        <div className="tab-panel active">
          <h3>News</h3>
          <div className="row">
            {paginate(news, pageNews).map((n) => (
              <div key={n.id} className="col-md-4">
                <img src={n.img} alt={n.title} />
                <div className="text-description">
                  <h4>{n.title}</h4>
                  <p>{n.desc}</p>
                </div>
                <Link to="/news">Explore <MdOutlineCallMade /></Link>
              </div>
            ))}
          </div>
          <Pagination
            total={totalPages(news)}
            current={pageNews}
            onChange={setPageNews}
          />
        </div>
      </div>
    </div>
  );
};

export default TabsWithPagination;
