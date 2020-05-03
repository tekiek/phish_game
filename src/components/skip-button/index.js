import React from 'react';
import './index.scss';

function SkipButton({skipEvent}) {

  return (
  	<div onClick={skipEvent} className="skipButton"> 
			<svg className="skipButtonSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38">
				<path d="M11.5 36c-.5 0-1-.2-1.4-.6-.8-.8-.8-2 0-2.8L23.7 19 10.1 5.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0L29.3 19 12.9 35.4c-.4.4-.9.6-1.4.6z"/>
			</svg>
		</div>
  );
}

export default SkipButton;
