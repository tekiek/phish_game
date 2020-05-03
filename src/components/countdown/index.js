import React, { useEffect } from 'react';
import './countdown.scss';

function Countdown({
  propData,
  appData,
  action,
  timer,
}) {

  
  return (
  	<div className="timerWrapper">
      <div className="timerText">{appData.clock}</div>
      <svg className="countdownSvg">
        <circle className={action} cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      </svg>
		</div>
  );
}

export default Countdown;
