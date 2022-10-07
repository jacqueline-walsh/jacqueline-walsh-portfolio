import React from "react";
import "./style.css";

const Testimonial = ({ title, url, body, author }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-link">
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
      <div className="testimonial-body">{body}</div>
      <div className="testimonial-author">{author}</div>
    </div>
  );
};

export default Testimonial;
