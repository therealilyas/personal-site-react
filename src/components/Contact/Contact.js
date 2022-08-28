import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        <div>
          <iframe
            width="400"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Tashkent+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Tashkent, Uzbekistan</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:+998930600640" title="Give me a call">
                    +998930600640
                  </a>
                </span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a
                    href="mailto:ilyas.sultanov2020@gmail.com"
                    title="Send me an email"
                  >
                    ilyas.sultanov2020@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <ul className="social-media-list">
            <li>
              <a
                href="https://github.com/therealilyas"
                target="_blank"
                className="contact-icon"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ilyas-sultanov-47a211207/"
                target="_blank"
                className="contact-icon"
              >
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/therealilyas_ss"
                target="_blank"
                className="contact-icon"
              >
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/therealilyas/"
                target="_blank"
                className="contact-icon"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <hr />

          <div className="copyright">&copy; 2022 IUS</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
