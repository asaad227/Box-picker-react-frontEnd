import React,{useState} from 'react'

export default function Button() {
  const [score, setScore] = useState(0);
  const [buttonDisplay, setButtonDisplay] = useState([])
  const [myBtn, setMybtn] = useState()
  function handleClick(btn){
    const randomM = Math.floor(Math.random() * 2);
    const randomT = Math.floor(Math.random() * 2);
    const myBtn = [...buttonDisplay, btn];
    setButtonDisplay(myBtn);
  
      if(randomM === randomT){
        setScore(score + 10)
       
    }
    
   
   
}
  console.log(buttonDisplay)
  return (
    <div>
    <h3>{score}</h3>
    <div className='boxes'>
    <button className='btn1' disabled={buttonDisplay.includes("btn1")} onClick={()=>handleClick("btn1")}>Pick Me</button>
        <button className='btn2' disabled={buttonDisplay.includes("btn2")}  onClick={()=>handleClick("btn2")}>Pick Me</button>
        <button className='btn3' disabled={buttonDisplay.includes("btn3")} onClick={()=>handleClick("btn3")}>Pick Me</button>
    </div>
    <div className='boxes'>
    <button className='btn4' disabled={buttonDisplay.includes("btn4")} onClick={()=> handleClick("btn4")}>Pick Me</button>
        <button className='btn5' disabled={buttonDisplay.includes("btn5")} onClick={()=> handleClick("btn5")}>Pick Me</button>
        <button className='btn6' disabled={buttonDisplay.includes("btn6")} onClick={()=> handleClick("btn6")}>Pick Me</button>
      </div>
      <div className='boxes'>
      <button className='btn7' disabled={buttonDisplay.includes("btn7")} onClick={()=> handleClick("btn7")}>Pick Me</button>
        <button className='btn8' disabled={buttonDisplay.includes("btn8")} onClick={()=>handleClick("btn8")}>Pick Me</button>
        <button className='btn9' disabled={buttonDisplay.includes("btn9")} onClick={()=> handleClick("btn9")}>Pick Me</button>
      </div>
        <div className='boxes2'>
        <button className='btn10' disabled={buttonDisplay.includes("btn10")} onClick={()=> handleClick("btn10")}>Pick Me</button>
        <button className='btn11' disabled={buttonDisplay.includes("btn11")} onClick={()=> handleClick("btn11")}>Pick Me</button>
        <button className='btn12' disabled={buttonDisplay.includes("btn12")} onClick={()=> handleClick("btn12")}>Pick Me</button>
        </div>
        <div className='boxes3'>
        <button className='btn13' disabled={buttonDisplay.includes("btn13")} onClick={()=> handleClick("btn13")}>Pick Me</button>
        <button className='btn14' disabled={buttonDisplay.includes("btn14")} onClick={()=> handleClick("btn14")}>Pick Me</button>
        <button className='btn15' disabled={buttonDisplay.includes("btn15")} onClick={()=> handleClick("btn15")}>Pick Me</button>
        </div>
        <div className="endBtn">
    <button className="dataStore" >D.Store</button>
    <button className="reload">Reload</button>    
</div>
       
       
        
    </div>
  )
}
