import React from 'react';
import './index.scss';

function ProgressBar({
  songCount
}) {
	const percentDone = songCount * 10;

  return (
  	<div className="progressBarWrapper clearfix">
	  	<div className="progressBarBorder">
			  <div className="progressBarFill" style={{width: `${percentDone}%`}}></div>
			</div>
		</div>
  );
}

export default ProgressBar;
