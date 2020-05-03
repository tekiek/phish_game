import React from 'react';
import './index.scss';

function Messages({
  appData,
}) {
  let header = '';
  let subheader = '';

  if (!appData.selected && appData.answers) {
    header = 'What Year Did Phish Play This Song?';
  }
  else if (appData.selected) {
    header = appData.answer == appData.selected ? 'Correct!' : 'Wrong!';
    subheader = appData.trackData.title + ' - ' + appData.trackData.show_date;
  }

  return (
    <div className="textGameQuestion text-white xs-text-center">
      <div className="xs-text-1">{header}</div>
      {subheader && 
        <div className="xs-text-3">{subheader}</div>
      }
    </div>
  );
}

export default Messages;
