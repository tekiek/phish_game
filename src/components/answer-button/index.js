import React from 'react';
import './index.scss';

function AnswerButton({
	key,
	answerText,
	propAnswer,
	appData,
}) {
	let disabledClass =  '';
	let buttonColor = 'button button--white ';

	if (appData.selected) {
		disabledClass = 'button--disabled ';
		
		if (appData.selected == answerText) {
			console.log('appData.answer', appData.answer);
			console.log('appData.selected', appData.selected);
			if (appData.answer != appData.selected) {
				buttonColor = 'button button--negative ';
			} else {
				buttonColor = 'button ';
			}
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
