import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

function AudioPlayer({track}) {

  return (
    <ReactAudioPlayer
		  src={track}
		  autoPlay
		/>
  );
}

export default AudioPlayer;
