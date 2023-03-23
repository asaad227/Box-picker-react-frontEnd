import React, { useState } from "react";

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

    if(randomBox === randomNum){
      setScore(score + 10)
  
    }
  }

  function roundCount(btn){
   if(count > 0){
    handleClick(btn)
   }
  }
  return (
    <div>
    <h4>10 Round game to pick the right boxes.</h4>
    <h4>Score: {score}</h4>
    <h4>Round: {count}</h4>
    <div>
      {buttonNames.map((name, index) => (
        <button className="btn1" key={index} disabled={isDisabled.includes(name)} onClick={()=> roundCount(name)}>{name}</button>
      ))}
    </div>

    </div>
  );
}


