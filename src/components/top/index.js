import React from 'react';
import SongCount from './song-count';
import Countdown from './countdown';
import Score from './score';
import ProgressBar from './progress-bar';
import Alert from './alert';

function Top({ appData }) {
  return (
  	<div className="top-bar">
			{ appData.debug && 
	      <Alert 
	        message={`Debug Mode ${appData.answer ? ': ' + appData.answer : ''}`}
	      />
	    } 
	    <div className="xs-flex xs-flex-justify-space-between xs-relative xs-my1">
	      <SongCount songCount={appData.songCount} />
	      <Countdown
	        appData={appData}
	        action={appData.isPlaying ? 'go' : 'stop'}
	      />
	      <Score score={appData.score} bonus={appData.bonus} />
	    </div>
	    <ProgressBar songCount={appData.songCount} />
	  </div>
  );
}

export default Top;
