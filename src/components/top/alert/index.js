import React from 'react';

function Alert({
	message
}) {

  return (
  	<div className="page-message page-message--warning xs-mb2 xs-p1 rounded">
		  <svg className="page-message__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38" aria-hidden="true">
		    <path d="M17.5 8.7h3v12.6h-3V8.7zM19 29.5c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5 1.12 2.5 2.5 2.5z"/>
		  </svg>
		  <div className="xs-mr2">{message}</div>
		</div>
  );
}

export default Alert;
