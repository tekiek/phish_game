import React from 'react';
import './index.scss';

function ProgressBar({songCount}) {
	const percentDone = songCount * 10;

  return (
  	<div className="progressBarWrapper clearfix">
  		<span className="textSongCount xs-text-2">
  			Song {songCount} / 10
  		</span>
      <span className="textScoreCount xs-text-2">
        Score: 0
      </span>
	  	<div className="progressBarBorder">
			  <div className="progressBarFill" style={{width: `${percentDone}%`}}></div>
			</div>
		</div>
  );
}

export default ProgressBar;
