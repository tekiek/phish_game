import React from 'react';
import Messages from './messages';
import AudioPlayer from './audio-player';

function Middle({ appData, loadSong, dataCollection }) {
  return (
  	<div className="middle">
      <Messages 
        appData={appData} 
        loadSong={loadSong}
      />
      { appData.track && 
        <AudioPlayer 
          appData={appData} 
          propData={dataCollection} 
        />
      }
    </div>
  );
}

export default Middle;
