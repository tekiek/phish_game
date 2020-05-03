import React from 'react';
import './index.scss';

function StopButton({stopEvent}) {

  return (
  	<div onClick={stopEvent} className="stopButton"> 
			<svg className="stopButtonSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
				<path d="M34 32.5c0 .8-.7 1.5-1.5 1.5h-27c-.8 0-1.5-.7-1.5-1.5v-27C4 4.7 4.7 4 5.5 4h27c.8 0 1.5.7 1.5 1.5v27z"/>
			</svg>
		</div>
  );
}

export default StopButton;
