import React from "react";
import "./question.css"

export default function Question({ quizz,ranQuizz,addScore }) {
   // const [quizzy, setQuizzy] = React.useState([]);
  
//Math.ceil(Math.random() * 2)
  //quizz.correct_answer
//console.log(quizz.correct_answer.length % 3)
      ranQuizz[quizz.correct_answer.length % 3] = quizz.correct_answer;
 

  const [styles, setStyles] = React.useState({ backgroundColor: "white" });
  const [styles2, setStyles2] = React.useState({ backgroundColor: "white" });
  const [styles3, setStyles3] = React.useState({ backgroundColor: "white" });
  function changeColor(x) {
    setStyles({ backgroundColor: `${ranQuizz[0]===quizz.correct_answer?"green":"red"}`});
  

    setStyles2({ backgroundColor: `${ranQuizz[1]===quizz.correct_answer?"green":"red"}`});
  
 
    setStyles3({ backgroundColor: `${ranQuizz[2]===quizz.correct_answer?"green":"red"}`});
// if (ranQuizz.indexOf(quizz.correct_answer)===x){
//    console.log(score())
//   }

  }
  return (
    <div>
      <div className="theQuestion"> {quizz.question}</div>
      <div className="incorrect">
        <div style={styles}  onClick={()=>changeColor(0)} className="middle">
          '{ranQuizz[0]}
        </div>
        <div style={styles2} onClick={()=>changeColor(1)} className="middle2">
          '{ranQuizz[1]}
        </div>
        <div style={styles3} onClick={()=>changeColor(2)} className="middle3">
          '{ranQuizz[2]}
        </div>
      </div>
    </div>
  );
}
