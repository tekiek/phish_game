import React from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './index.scss';

function AudioPlayer({
	propData,
	appData,
}) {

	function onPlay(event) {
		console.log('onPlay');
		propData({
			clock: 30,
			isPlaying: true,
		});
	}

	function onListen(event) {
		console.log('onListen', event);
	}

  return (
  	<div>
  		{ appData.track && 
		    <ReactAudioPlayer
				  src={appData.track}
				  customVolumeControls={[]}
				  showDownloadProgress={false}
				  showJumpControls={false}
				  customAdditionalControls={[]}
				  onPlay={onPlay}
				  onListen={onListen}
				/>
			}
		</div>
  );
}

export default AudioPlayer;
