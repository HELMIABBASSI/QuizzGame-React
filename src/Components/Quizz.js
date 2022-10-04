import React, { useEffect } from "react";
import Question from "./Question";
import "./Quizz.css";

export default function Quizz(props) {
  const [quizzData, setQuizzData] = React.useState([]);
  const [score, setScore] = React.useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setQuizzData(data.results));
  }, []);


  
//   console.log(quizzData);
//   function isBoolean(val) {
//     return val === false && val === true;
//  }
  
//   const quizzss =quizzData.filter((item)=>{
//     if (item.correct_answer!==false && item.correct_answer!==true){
//     return item}}
  
//     )
function addScore(){
     setScore(score => {return score+1}
)}





  const quizzs = quizzData.map((quizz) => {
    const ranQuizz = [
        quizz.incorrect_answers[1],
        quizz.incorrect_answers[2],
        quizz.incorrect_answers[0],
      ];

    return (
      <Question score={score}  addScore={addScore}   key={quizzData.indexOf(quizz)} ranQuizz={ranQuizz} quizz={quizz}/>
    );
  });







  

  return <div className="bigBox">{quizzs}</div>;
}
