import React from 'react'

export default function Button({handleClick, score}) {
  
  return (
    <div>
        <button className='btn1' onClick={handleClick}>Pick Me</button>
        <button className='btn2' onClick={handleClick}>Pick Me</button>
        <button className='btn3' onClick={handleClick}>Pick Me</button>
        <button className='btn4' onClick={handleClick}>Pick Me</button>
        <button className='btn5' onClick={handleClick}>Pick Me</button>
        <button className='btn6' onClick={handleClick}>Pick Me</button>
        <button className='btn7' onClick={handleClick}>Pick Me</button>
        <button className='btn8' onClick={handleClick}>Pick Me</button>
        <button className='btn9' onClick={handleClick}>Pick Me</button>
        <button className='btn10' onClick={handleClick}>Pick Me</button>
        <button className='btn11' onClick={handleClick}>Pick Me</button>
        <button className='btn12' onClick={handleClick}>Pick Me</button>
        <button className='btn13' onClick={handleClick}>Pick Me</button>
        <button className='btn14' onClick={handleClick}>Pick Me</button>
        <button className='btn15' onClick={handleClick}>Pick Me</button>
        <h3>{score}</h3>
    </div>
  )
}
