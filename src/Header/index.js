import React from 'react';
import Image from "../gif/espeon.gif"

export default function Header() {
  return (
    <div>
         <div>
        <h3 className="win">Winner: </h3>
        <h3 className="playerName">Player Name: </h3>
        <h3 className="heading">Where is the <strong>Espeon</strong>!!!</h3>
        <div className='espeon'>
        <img src={Image} alt="espeon pokemon"/>
        <img  src={Image} alt="espeon pokemon"/>
        <img  src={Image} alt="espeon pokemon"/>
        </div>
       </div>
    </div>
  )
}
