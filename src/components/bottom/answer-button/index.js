import React from 'react';
import './index.scss';

function AnswerButton({
	answerText,
	propAnswer,
	appData,
}) {
	let disabledClass =  ' ';
	let buttonColor = 'answerButton button selectable ';
	let buttonAnimate = '';

	if (appData.selected) {
		if (appData.selected === answerText) {
			if (appData.answer !== appData.selected) {
				buttonColor = 'answerButton button button--negative ';
				buttonAnimate = 'animate__animated animate__pulse ';
			} else {
				buttonColor = 'answerButton button button--sms ';
				buttonAnimate = 'animate__animated animate__pulse ';
			}
		} else {
			disabledClass = 'button--disabled ';
			buttonAnimate = ' ';
		}
	} 

	function onClick() {
		propAnswer(answerText);
	}

  return (
  	<div 
  		onClick={appData.selected ? null : onClick} 
  		className={disabledClass + buttonColor + buttonAnimate + ' col xs-col-12'}>
  		<p>{answerText}</p>
  	</div>
  );
}

export default AnswerButton;
