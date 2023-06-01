import React from "react";
import leftImg from "../../assets/images/img.png";
import resume from "../../assets/Resume.docx";
const About = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 m-0 p-0">
            <img
              src={leftImg}
              alt="PWA"
              className="img-fluid img-left justify-right"
            />
          </div>
          <div className="col-sm-6 mob-center align-self-center justify-content-left">
            <p className="h6 text-muted" id="about">
              About Me,
            </p>
            <p className="h3">
              Frontend & UI Developer. <br /> Mumbai-India.
            </p>
            <p className="h6 text-muted">
              I am Saiyad Husain, a front-end and UI developer based in
              Mumbai,India. I have over 8 years of experience in web and mobile
              applications. Hard work, challenging and passionate about
              developing, performance, scalable code, and thoughtful design for
              applications Technical and highly motivated front-end developers
              with technical skills in end-to-end software development, web and
              mobile application design, possessing knowledge of various
              software languages and tools with problem solving and passion
              about the user experience and integration of software as per the
              requirements.
            </p>
            <a className="btn btn-sm-12 mt-5 btn-lg theme-btn" href={resume}>
              <i className="fa fa-download fa-right text-a" />
              Download Profile
            </a>
          </div>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
};
export default About;
