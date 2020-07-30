import React, { useState, useEffect } from 'react';
import Top from './components/top';
import Middle from './components/middle';
import Bottom from './components/bottom';
import fetchTrack from './api/fetchTrack';
import './App.scss';
import './css/solid.css';
import './css/animate.css';

const songLength = 30;

function App() {
  const [appData, setAppData] = useState({
    score: 0,
    songCount: 0,
    clock: 0,
    track: null,
    isPlaying: false,
    answers: [],
    answer: null,
    selected: null,
    debug: false,
    bonus: [],
  });
  let timer;


  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('debug')) {
        dataCollection({debug: true});
        console.log('debug mode');
      }
    } catch (err) {}
  }, []);

  // Countdown Clock
  useEffect(() => {
    if (
      typeof appData.clock === 'number' 
      && appData.track !== null 
      && appData.isPlaying === true ) 
    {
      if (appData.clock === 0) {
        stopSong();
      } else {
        timer = setTimeout(() => {
          dataCollection({clock: appData.clock - 1});
        }, 1000);
      }
    }
  }, [appData]);


  function dataCollection(propData) {
    console.log('~~~~~~~~~~ dataCollection ~~~~~~~~~');
    console.log('propData', propData);
    console.log('appData', appData);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    setAppData({...appData, ...propData});
  }

  function stopSong() {
    clearTimeout(timer);
    dataCollection({
      track: null,
      isPlaying: false,
    });
  }

  function loadSong() {
    clearTimeout(timer);
    fetchTrack(appData, dataCollection);
  }

  function answerSelected(selected) {
    let tempScore = appData.score + updatedScore(selected)['score'];
    let bonus = updatedScore(selected)['bonus'];

    clearTimeout(timer);
    dataCollection({
      selected: selected,
      track: null,
      score: tempScore,
      isPlaying: false,
      bonus: bonus,
    });
  }

  function updatedScore(selected) {
    let roundScore = 0;
    let bonus = [];

    if (selected === appData.answer) {
      roundScore += 100;
      roundScore += appData.clock * 3;
      bonus.push('Time Bonus');
      bonus.push('Poop');
    } else {
      let yearDifference = Math.abs(selected - appData.answer);;

      if (yearDifference <= 4) {
        bonus.push('Wrong but close');
        roundScore += 10 * yearDifference;
        roundScore += appData.clock * .5;
      }
    }

    console.log('roundScore', roundScore);
    return {
      score: Math.round(roundScore),
      bonus: bonus
    }
  }

  console.log('appData', appData);

  return (
    <div className="phish-game col xs-p1 md-p0 xs-col-12 md-col-6 md-offset-3">
      <Top 
        appData={appData} 
      />
      <Middle 
        appData={appData} 
        loadSong={loadSong} 
        dataCollection={dataCollection} 
      />
      <Bottom 
        appData={appData}
        answerSelected={answerSelected}
      />
    </div>
  );
}

export default App;

