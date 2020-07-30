import React, { useState } from 'react';
import CountUp from 'react-countup';
import './index.scss';

function Score({
  score,
  bonus,
}) {

  function onAnimationEnd(event) {
    let el = event.target;

    el.classList.remove('animate__animated');
    el.style.webkitAnimation = 'none';
    bonus.pop();
    el.innerHTML =bonus[bonus.length - 1];
    
    if (bonus.length) {
      setTimeout(function() {
        el.classList.add('animate__animated');
        el.style.webkitAnimation = '';
        el.addEventListener('animationend', onAnimationEnd);
      }, 10)
    } else {
      el.innerHTML = '';
    }
  }

  return (
    <>
      { bonus.length > 0 &&
        <span class="bonusText text-red animate__animated animate__fadeOutUp animate__slow" onAnimationEnd={onAnimationEnd}>
          {bonus[bonus.length - 1]}
        </span>
      }
      <span className="textScoreCount xs-text-3 md-text-2">
        Score: <span className="text-white"><CountUp end={score} duration={5} /></span>
      </span>
    </>
  );
}

export default Score;
