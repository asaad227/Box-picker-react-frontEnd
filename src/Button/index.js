import React,{useState} from 'react'

export default function Button() {
  const [score, setScore] = useState(0);
  const [selectedButton, setSelectedButton] = useState(null);
  const [buttonDisplay, setButtonDisplay] = useState(false)
  function handleClick(btn){
    const randomM = Math.floor(Math.random() * 2);
    const randomT = Math.floor(Math.random() * 2);
    setSelectedButton(btn)
      if(randomM === randomT){
        setScore(score + 10)
       setButtonDisplay(btn)
    }
    
   
   
}
  
  return (
    <div>
    <h3>{score}</h3>
    <div className='boxes'>
    <button className='btn1' disabled={selectedButton === "btn1"} onClick={()=>handleClick("btn1")}>Pick Me</button>
        <button className='btn2' disabled={selectedButton === "btn2"}  onClick={()=>handleClick("btn2")}>Pick Me</button>
        <button className='btn3' disabled={selectedButton === "btn3"} onClick={()=>handleClick("btn3")}>Pick Me</button>
    </div>
    <div className='boxes'>
    <button className='btn4' disabled={selectedButton === "btn4"} onClick={()=> handleClick("btn4")}>Pick Me</button>
        <button className='btn5' disabled={selectedButton === "btn5"} onClick={()=> handleClick("btn4")}>Pick Me</button>
        <button className='btn6' disabled={selectedButton === "btn6"} onClick={()=> handleClick("btn6")}>Pick Me</button>
      </div>
      <div className='boxes'>
      <button className='btn7' disabled={selectedButton === "btn7"} onClick={()=> handleClick("btn7")}>Pick Me</button>
        <button className='btn8' disabled={selectedButton === "btn8"} onClick={()=>handleClick("btn8")}>Pick Me</button>
        <button className='btn9' disabled={selectedButton === "btn9"} onClick={()=> handleClick("btn9")}>Pick Me</button>
      </div>
        <div className='boxes2'>
        <button className='btn10' disabled={selectedButton === "btn10"} onClick={()=> handleClick("btn10")}>Pick Me</button>
        <button className='btn11' disabled={selectedButton === "btn11"} onClick={()=> handleClick("btn11")}>Pick Me</button>
        <button className='btn12' disabled={selectedButton === "btn12"} onClick={()=> handleClick("btn12")}>Pick Me</button>
        </div>
        <div className='boxes3'>
        <button className='btn13' disabled={selectedButton === "btn13"} onClick={()=> handleClick("btn13")}>Pick Me</button>
        <button className='btn14' disabled={selectedButton === "btn14"} onClick={()=> handleClick("btn14")}>Pick Me</button>
        <button className='btn15' disabled={selectedButton === "btn15"} onClick={()=> handleClick("btn15")}>Pick Me</button>
        </div>
        <div className="endBtn">
    <button className="dataStore" >D.Store</button>
    <button className="reload">Reload</button>    
</div>
       
       
        
    </div>
  )
}
