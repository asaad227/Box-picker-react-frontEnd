import React, {useState} from 'react';
import Button from '../Button';
import Fetch from '../Fetch';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
   
    
  function btn1(){
      const randomM = Math.floor(Math.random() * 2);
      const randomT = Math.floor(Math.random() * 2);
      if(randomM === randomT){
          console.log("I have clicked 1st")
          setScore(score + 10)
      }
  }
  return (
    <div className="App">
  <Fetch />
  <Button btn1={btn1} score={score} />

     
    </div>
  );
}

export default App;
