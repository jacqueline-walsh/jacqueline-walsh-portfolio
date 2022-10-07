import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./style.css";

const Form = () => {
  const form = useRef();
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setShowConfirmMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="form-contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-contact-name">
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-contact-company">
          <label htmlFor="name">Company:</label>
          <br />
          <input type="text" className="form-control" name="company" />
        </div>
        <div className="form-contact-email">
          <label htmlFor="name">Email:</label>
          <br />
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form-contact-subject">
          <label htmlFor="name">Subject:</label>
          <br />
          <input type="text" className="form-control" name="subject" />
        </div>
        <div className="form-contact-message">
          <label htmlFor="name">Message:</label>
          <br />
          <textarea name="message" className="form-control" />
        </div>
        <div className="form-contact-submit">
          <input
            type="submit"
            className="form-contact-button"
            value="Send Mail"
          />
          <br />
          {showConfirmMessage && (
            <div className="form-contact-confirm-message">
              Thank you. Your message has been sent!
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
