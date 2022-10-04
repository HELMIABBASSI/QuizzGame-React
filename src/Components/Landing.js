import React from "react";
import "./landing.css"

export default function Landing(props) {
  return (
    <div  className="landing" >
        <div className="shape1"></div>
<p className="para1"> Quizzical</p>
<p className="para2">Quizzical is an awesome game that will make you more knolagable.

We hope that you enjoy playing it.</p>


      <button className="button" onClick={props.openQuizz}> go to Quizz </button>
      <div className="shape2"></div>
    </div>
  );
}
