import React from 'react';
import './index.scss';

function AnswerButton({
	answerText,
	propAnswer,
	appData,
}) {
	let disabledClass =  '';
	let buttonColor = 'button button--white ';

	if (appData.selected) {
		if (appData.selected === answerText) {
			if (appData.answer !== appData.selected) {
				buttonColor = 'button button--negative ';
			} else {
				buttonColor = 'button ';
			}
		} else {
			disabledClass = 'button--disabled ';
		}
	} 

	function onClick() {
		propAnswer(answerText);
	}

  return (
  	<div 
  		onClick={appData.selected ? null : onClick} 
  		className={disabledClass + buttonColor + '  col xs-col-12'}>
  		<p>{answerText}</p>
  	</div>
  );
}

export default AnswerButton;
