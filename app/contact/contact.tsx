// import emailIcon from "../assets/email.png";
// import linkedInIcon from "../assets/linkedin.png";
import Image from "next/image";

export default function contact() {
  return (
    <div className="contact-container">
      <p id="contact">Get in Touch</p>
      <h1>Contact Me</h1>
      <div className="contactInfo-container">
        <div className="email-container">
          <img
            src={"/assets/email.png"}
            alt="email icon"
            className="email-icon"
          />
          <p>
            <a href="mailto:moiz.amjad37@gmail.com">moiz.amjad37@gmail.com</a>
          </p>
        </div>

        <div className="linkedIn-container">
          <img
            src={"/assets/linkedin.png"}
            alt="LinkedIn Icon"
            className="linkedIn-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/moiz-amjad-047632227/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
