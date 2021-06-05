import React from "react";
import skillImg from '../../assets/images/skills.png';



const numbers = [
    { type: "HTML5", level: 80, width: 80 },
    { type: "CSS3", level: 80, width: 80 },
    { type: "JavaScript", level: 70, width: 70 },
    { type: "JQuery", level: 70, width: 70 },
    { type: "PHP", level: 50, width: 50 },
    { type: "ReactJs", level: 60, width: 60 },
    { type: "AngularJs", level: 60, width: 60 },
    { type: "ionic", level: 60, width: 60 },
];


export default class Skills extends React.Component {

    render() {
        const listItems = numbers.map((item, i) =>
            <div className="progress" key={i}>
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    <span className="sr-only">{item.level} % Complete</span>
                </div>
                <span className="progress-type">{item.type}</span>
                <span className="progress-completed" style={{ width: `${item.width}%`}}>{item.level}%</span>
            </div>
        )
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 mob-center align-self-center justify-content-left">
                    <p className="h6 text-muted" id="skills">Skills,</p>
                    <p className="h3 mb-2">Skills and Rating</p>
                        {listItems}
                    </div>
                    <div className="col-sm-6 m-0 p-0">
                       <img src={skillImg} alt="Skills" className="img-fluid float-right  img-col justify-right" />
                    </div>
                </div>
                <hr/>
            </div>);
    }
};
