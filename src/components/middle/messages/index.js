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


  if (appData.songCount == 0) {
    header = 'Lorem ipsum!';
    startGameButton = true;
  } else if (appData.songCount <= 3) {
    if (!appData.selected) {
      header = 'What Year Did Phish Play This Song?';
    } else {
      header = appData.answer === appData.selected ? 'Correct!' : 'Wrong!';
      subheader = appData.trackData.title + ' - ' + appData.trackData.show_date;
      nextSongButton = true;
    }
  } else {
    header = 'Game Over!';
  }

  return (
    <div className="messagesWrapper xs-my1 md-my3 text-white xs-text-center">
      <div className="xs-text-3 sm-text-2 md-text-1">{header}</div>
      {subheader && 
        <div className="xs-text-4 xs-mt1">{subheader}</div>
      }
      {startGameButton && 
        <button onClick={loadSong} className="messageButton button xs-mt3">Start Game</button>
      }
      {nextSongButton && 
        <button onClick={loadSong} className="messageButton button xs-mt3">Next Song</button>
      }
    </div>
  );
}

export default Messages;
