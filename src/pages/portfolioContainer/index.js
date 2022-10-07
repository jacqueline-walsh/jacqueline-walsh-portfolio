import React from "react";
import { portfolios } from "../../data/portfolios";
import Portfolio from "../../components/portfolio";
import "./style.css";

const PortfolioContainer = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-container-heading">My Portfolio</h1>
      <p>
        Further work can be found on my{" "}
        <a
          className="portfolio-container-github-link"
          href="https://github.com/jacqueline-walsh"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        account
      </p>
      <div className="portfolio-container-grid">
        {portfolios.map((portfolio) => {
          return (
            <div className="portfolio" key={portfolio.id}>
              <Portfolio
                title={portfolio.title}
                url={portfolio.url}
                description={portfolio.description}
                image={portfolio.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioContainer;
