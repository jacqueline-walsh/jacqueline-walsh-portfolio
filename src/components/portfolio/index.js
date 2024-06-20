import React from "react";
import "./style.css";

const Portfolio = ({ title, url, description, image }) => {

  function showLinkTitle(title) {
    if (title === 'BookIt' || title === 'ChefMate' || title === 'Irish4Fun') {
      return 'Visit Github Repo'
    } else {
      return 'Visit Site'
    }
  };

  return (
    <div className="portfolio">
      <h1 className="portfolio-title">{title}</h1>
      <div className="portfolio-description">{description}</div>
      <div className="portfolio-site-link">
        <a href={url} target="_blank" rel="noreferrer">
          {showLinkTitle(title)}
        </a>
      </div>
      <div className="portfolio-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Portfolio;
