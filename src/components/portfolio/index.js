import React from "react";
import "./style.css";

const Portfolio = ({ title, url, description, image }) => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">{title}</h1>
      <div className="portfolio-description">{description}</div>
      <div className="portfolio-site-link">
        <a href={url} target="_blank" rel="noreferrer">
          Visit Site
        </a>
      </div>
      <div className="portfolio-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Portfolio;
