import React from 'react';
import AnswerButton from './answer-button';

function Bottom({ appData, answerSelected }) {
  return (
  	<div className="bottom">
      { appData.songCount != 0 &&
        <div className="dottedLine xs-my2 md-my3"></div>
      }
      <div className="col xs-col-12">
        {appData.answers.map(function(answer, key) {
          return <AnswerButton appData={appData} key={Math.random()} answerText={answer} propAnswer={answerSelected}/>;
        })} 
      </div>
    </div>
  );
}

export default Bottom;
