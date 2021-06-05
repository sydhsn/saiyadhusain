import React from "react";
const Contact = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
            <p className="h3 mb-2 text-center">Contact Details</p>
            <p className="h6 text-muted" id="contact">Contact</p>
                <div className="row">
                    <div className="col-sm-12 col-lg-4">
                        <div className="conatct">
                            <div className=" box">
                                <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                                <div className='details'><h3>India</h3></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-4">
                        <div className="conatct">
                            <div className=" box">
                                <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                                <div className='details'><h3>+91 8652431765</h3></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-4">
                        <div className="conatct">
                            <div className=" box">
                                <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                <div className='details'><h3>saiyad.husain@ymail.com</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Contact;
