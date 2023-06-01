import React from "react";
import Logo from "../../logo.png";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light theme_bg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa text-a fa-bars"></span>
        </button>
        <img src={Logo} className="logo d-lg-none" alt="SAIYADHUSAIN"/>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="!#">
           <img src={Logo} className="logo d-none d-lg-block" alt="SAIYADHUSAIN"/>
          </a>
          <ul className="navbar-nav mr-auto mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link text-a" href="#about">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-a" href="#skills">
                Skills <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-a" href="#experience">
                Experience <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-a" href="#contact">
                Contact <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mr-sm-2 mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link text-a" href="tel:+918652431765">
                <i className="fa fa-1x action-icon fa-phone-square d-none d-lg-block text-white"></i>
                <button type="button" href="tel:+918652431765" className="btn btn-medium-block theme-btn-white d-sm-block d-lg-none">Call</button>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-a" href="mailto:saiyad.husain@ymail.com">
              <i className="fa fa-1x action-icon fa-envelope d-none d-lg-block text-white"></i>
              <button type="button" href="mailto:saiyad.husain@ymail.com" className="btn btn-medium-block theme-btn-white d-sm-block d-lg-none">eMail</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>   
    </React.Fragment>
  );
};
export default Header;
