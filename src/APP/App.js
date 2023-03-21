import React, {useState} from 'react';
import Button from '../Button';
import Fetch from '../Fetch';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  
  function handleClick(){
      const randomM = Math.floor(Math.random() * 2);
      const randomT = Math.floor(Math.random() * 2);
      if(randomM === randomT){
          setScore(score + 10)
      }
  }
  return (
    <div className="App">
  {/* <Fetch /> */}
  <Button  handleClick={handleClick} score={score} />

     
    </div>
  );
}

export default App;
