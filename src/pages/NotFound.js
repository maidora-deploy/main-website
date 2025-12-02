// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "100px", color: "#ff5e5e" }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "10px 20px",
          background: "#004E92",
          color: "#fff",
          borderRadius: "25px",
          textDecoration: "none",
        }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
