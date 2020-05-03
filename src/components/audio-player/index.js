import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../../css/solid.css';

function AudioPlayer({
	propData,
	appData,
}) {
  return (
  	<div>
  		{ appData.track && 
		    <ReactAudioPlayer
				  src={appData.track}
				  autoPlay
				/>
			}
		</div>
  );
}

export default AudioPlayer;
