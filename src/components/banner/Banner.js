import React from "react";
import portfolio from '../../assets/images/react-img.png';
const Banner = () => {
  return (
    <React.Fragment>
        <div className="container-fluid">
          <div className="row">
          <div className="col-sm-6 mob-center align-self-center justify-content-left">
                <p className="h6 text-muted">HEY THERE !</p>
                <p className="h3">&ldquo;I AM SAIYAD HUSAIN&rdquo;</p>
                <p className="h6 text-muted"><cite>Sr. Software Engineer</cite></p>
                <a className="btn btn-sm-12 mt-5 btn-lg theme-btn" href="tel:+918652431765"><i className="fa fa-mobile fa-right text-a"/>Call me</a>
            </div>
            <div className="col-sm-6 m-0 p-0">
              <img src={portfolio} alt="Portfolio" className="img-fluid img-col justify-right" />
            </div>
          </div>
        </div>
        <hr/>
    </React.Fragment>
  );
};
export default Banner;
