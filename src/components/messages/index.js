import React from 'react';
import './index.scss';

function Messages({
  appData,
  loadSong,
}) {
  let header = '';
  let subheader = '';
  let startGameButton = false;
  let nextSongButton = false;


  if (!appData.selected && !appData.track) {
    header = 'Lorem ipsum!';
    startGameButton = true;
  } else if (!appData.selected && appData.track) {
    header = 'What Year Did Phish Play This Song?';
  }
  else if (appData.selected) {
    header = appData.answer === appData.selected ? 'Correct!' : 'Wrong!';
    subheader = appData.trackData.title + ' - ' + appData.trackData.show_date;
    nextSongButton = true;
  }

  return (
    <div className="messagesWrapper text-white xs-text-center">
      <div className="xs-text-1">{header}</div>
      {subheader && 
        <div className="xs-text-4 xs-mt1">{subheader}</div>
      }
      {startGameButton && 
        <button onClick={loadSong} className="messageButton button xs-my3">Start Game</button>
      }
      {nextSongButton && 
        <button onClick={loadSong} className="messageButton button xs-my3">Next Song</button>
      }
    </div>
  );
}

export default Messages;
