import React from "react";

import experiencesimg from '../../assets/images/experiences.png';

const experience = [
    { type: "2 Years of mobile application development exprience with angularjs and ionic." },
    { type: "3 Years of web application development exprience with React JS & Redux." },
    { type: "2 Years of web application development exprience with JavaScript & PHP." }
];


export default class Experience extends React.Component {

    render() {
        const listItems = experience.map((item, i) => 
            <div key={i}>
            <ul>
            <li>{item.type}</li>                  
            </ul>
            </div>
        )
       
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 m-0 p-0">
                    <img src={experiencesimg} alt="experience" className="img-fluid img-left justify-right" />
                    </div>
                    <div className="col-sm-6 mob-center align-self-center justify-content-left">
                    <p className="h6 text-muted" id="experience">Experience</p>
                    <p className="h3 mb-2">Skill based experience</p>
                        {listItems}
                    </div>
                </div>
                <hr/>
            </div>)
    }
};