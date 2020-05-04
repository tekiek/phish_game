import React from 'react';
import './index.scss';

function Countdown({
  appData,
  action,
}) {

  return (
  	<div className="timerWrapper">
      <div className="timerText">{appData.clock}</div>
      <svg className="countdownSvg">
        <circle className={action} r="18" cx="20" cy="20" />
      </svg>
		</div>
  );
}

export default Countdown;
