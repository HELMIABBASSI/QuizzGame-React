
import './App.css';
import React from 'react';
import Landing from './Components/Landing';
import Quizz from './Components/Quizz';
function App() {
const [open,setOpen]=React.useState(false)






function openQuizz(){
  setOpen(true)
}
  return (
    <div className="App">
  

{open===true ?<Quizz
openQuizz={openQuizz}

/>:<Landing
openQuizz={openQuizz}/>}
    </div>
  );
}

export default App;
