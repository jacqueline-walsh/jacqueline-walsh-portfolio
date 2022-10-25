import React from "react";
import "./style.css";

const Logo = (logoLink, imageSrc, alt) => {
  return (
    <div className="Logo">
      <a href={logoLink} target="_blank" rel="noreferrer">
        <img className="logo-link" src={imageSrc} alt={alt} />
      </a>
    </div>
  );
};

export default Logo;
