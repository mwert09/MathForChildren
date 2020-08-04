import React from 'react';
import { useContext, useEffect, useState } from "react";
import { useTimer } from 'react-timer-hook';
import "./Zaman.scss";
 
function Zaman({ expiryTimestamp }, props) {

    var [sayilar, setGameState] = useState({
        surebitti: false,
      });
    var {zaman, surebitti} = sayilar;

    
    
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => props.zamanbitti });

 
 
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '50px'}}>
        <span>{seconds}</span>
      </div>
      
    </div>
  );
}

export default Zaman;