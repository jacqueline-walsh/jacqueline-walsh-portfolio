import React from "react";
import { testimonials } from "../../data/testimonials";
import Testimonial from "../../components/testimonial";
import "./style.css";

const TestimonialsContainer = () => {
  return (
    <div className="testimonials-container">
      <h1 className="testionials-container-heading">Testimonials of My Work</h1>
      <div className="testimonials-container-grid">
        {testimonials.map((testimonial) => {
          return (
            <div key={testimonial.id}>
              <Testimonial
                title={testimonial.title}
                url={testimonial.url}
                body={testimonial.body}
                author={testimonial.author}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialsContainer;
