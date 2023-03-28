import React, { useState } from "react";
import Fetch from "../Fetch";

import Win from "../Audio/mixkit-ethereal-fairy-win-sound-2019.wav"
import Espeon from "../Audio/mixkit-game-click-1114.wav"


export function Button() {
  const [score, setScore] = useState(0);
  const [ isDisabled, setIsDisabled] = useState([]);
  const [count, setCount] = useState(10)

  const buttonNames = []
  
  for(let i = 1; i <= 15 ; i++){
    buttonNames.push("button" + i)
  }

  function handleClick(btn){
    setCount(count - 1)
    const randomNum = Math.floor(Math.random() * 3);
    const randomBox = Math.floor(Math.random() * 3);

    const mySqr = [ ...isDisabled, btn];
    setIsDisabled(mySqr)
   
    const audio = new Audio(Espeon);
    audio.play()
    if(randomBox === randomNum){
      setScore(score + 10)
     
    }

    

    if(score > 40){
      const audio = new Audio(Win)
      audio.play()
    }
  }

  function roundCount(btn){
   if(count > 0){
    handleClick(btn)
   }
  }
  
function round(){
    if(count === 0){
      return(<div><Fetch/></div>)
    }else{
      return(<div>
        <h4>10 Round game to pick the right boxes.</h4>
        <h4>Score: {score}</h4>
        <h4>Round: {count}</h4>
        <div>
          {buttonNames.map((name, index) => (
            <button className="btn1" key={index} disabled={isDisabled.includes(name)} onClick={()=> roundCount(name)}>{name}</button>
          ))}
        </div>
      
        </div>)
    }
  }

 
  return (
    round()
  );
}


