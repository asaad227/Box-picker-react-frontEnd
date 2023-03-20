import React from 'react'

export default function Button({btn1, score}) {
  return (
    <div>
        <button className='btn1' onClick={btn1}>Pick Me</button>
        <button className='btn2' onClick={btn1}>Pick Me</button>
        <button className='btn3' onClick={btn1}>Pick Me</button>
        <button className='btn4' onClick={btn1}>Pick Me</button>
        <button className='btn5' onClick={btn1}>Pick Me</button>
        <button className='btn6' onClick={btn1}>Pick Me</button>
        <button className='btn7' onClick={btn1}>Pick Me</button>
        <button className='btn8' onClick={btn1}>Pick Me</button>
        <button className='btn9' onClick={btn1}>Pick Me</button>
        <button className='btn10' onClick={btn1}>Pick Me</button>
        <button className='btn11' onClick={btn1}>Pick Me</button>
        <button className='btn12' onClick={btn1}>Pick Me</button>
        <button className='btn13' onClick={btn1}>Pick Me</button>
        <button className='btn14' onClick={btn1}>Pick Me</button>
        <button className='btn15' onClick={btn1}>Pick Me</button>
        <h3>{score}</h3>
    </div>
  )
}
