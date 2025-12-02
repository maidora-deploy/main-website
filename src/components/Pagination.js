import React from "react";

const Pagination = ({ total, current, onChange }) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="tabs-pagination">
      {pages.map((num) => (
        <button
          key={num}
          className={`page-btn ${current === num ? "active" : ""}`}
          onClick={() => onChange(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
