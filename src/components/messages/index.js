import React from 'react';
import './index.scss';

function Messages({
  appData,
  startSong,
}) {
  let header = '';
  let subheader = '';
  let startGameButton = false;
  let nextSongButton = false;


  if (!appData.selected && !appData.track) {
    header = 'Lorem ipsum!';
    //subheader = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
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
        <div className="xs-text-3">{subheader}</div>
      }
      {startGameButton && 
        <button onClick={startSong} className="messageButton button xs-my3">Start Game</button>
      }
      {nextSongButton && 
        <button onClick={startSong} className="messageButton button xs-my3">Next Song</button>
      }
    </div>
  );
}

export default Messages;
