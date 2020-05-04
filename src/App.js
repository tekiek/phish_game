import React, { useState, useEffect } from 'react';
import AudioPlayer from './components/audio-player/index';
import fetchTrack from './api/fetchTrack';
import SongCount from './components/song-count';
import Countdown from './components/countdown';
import Score from './components/score';
import ProgressBar from './components/progress-bar';
import Messages from './components/messages';
import AnswerButton from './components/answer-button/index';
import './App.scss';
import './css/solid.css';

const songLength = 30;

function App() {
  const [appData, setAppData] = useState({
    score: 0,
    songCount: 0,
    clock: songLength,
    track: null,
    answers: [],
    answer: null,
    selected: null,
  });
  let timer;

  // Countdown Clock
  useEffect(() => {
    if (typeof appData.clock === 'number' && appData.track !== null ) {
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
    console.log('stopSong!')
    clearTimeout(timer);
    dataCollection({track: null});
  }

  function startSong() {
    stopSong();
    fetchTrack(appData, dataCollection);
  }

  function answerSelected(selected) {
    let tempScore = appData.score + updatedScore(selected);

    clearTimeout(timer);
    dataCollection({
      selected: selected,
      track: null,
      score: tempScore,
    });
  }

  function updatedScore(selected) {
    let roundScore = 0;

    if (selected === appData.answer) {
      roundScore += 100;
      roundScore += appData.clock * 3;
    } else {
      let yearDifference = Math.abs(selected - appData.answer);;

      if (yearDifference <= 3) {
        roundScore += 10 * yearDifference;
        roundScore += appData.clock * .5;
      }
    }

    console.log('roundScore', roundScore);
    return Math.round(roundScore);
  }

  //console.log('appData', appData);

  return (
    <div className="col xs-p1 md-p0 xs-col-12 md-col-6 md-offset-3">  
      <div className="xs-flex xs-flex-justify-space-between xs-my1">
        <SongCount songCount={appData.songCount} />
        <Countdown
          appData={appData}
          action={appData.track ? 'go' : 'stop'}
        />
        <Score score={appData.score} />
      </div>
      <ProgressBar songCount={appData.songCount} />
      { appData.track && 
        <AudioPlayer 
          appData={appData} 
          propData={dataCollection} 
        />
      }
      <Messages appData={appData} startSong={startSong}/>
      <div className="dottedLine"></div>
      <div className="col xs-col-12">
        {appData.answers.map(function(answer, key){
          return <AnswerButton appData={appData} key={Math.random()} answerText={answer} propAnswer={answerSelected}/>;
        })} 
      </div>

    </div>
  );
}

export default App;

