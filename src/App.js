import React, { useState, useEffect } from 'react';
import AudioPlayer from './components/audio-player/index';
import AnswerButton from './components/answer-button/index';
import Countdown from './components/countdown';
import fetchTrack from './api/fetchTrack';
import StopButton from './components/stop-button';
import SkipButton from './components/skip-button';
import ProgressBar from './components/progress-bar';
import Messages from './components/messages';
import './App.scss';
import './css/solid.css';

function App() {
  const [appData, setAppData] = useState({
    score: 0,
    songCount: 0,
    clock: 30,
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
    console.log('selected', selected);
    console.log('answer', appData.answer);
    clearTimeout(timer);
    dataCollection({
      selected: selected,
      track: null,
    });
  }

  console.log('appData', appData);

  return (
    <div className="col xs-col-6 xs-offset-3">  
      <div className="wave header col xs-col-12">
        <ProgressBar songCount={appData.songCount} />
        { appData.track && 
          <AudioPlayer 
            appData={appData} 
            propData={dataCollection} 
          />
        }
        <div className="xs-text-center">
          <StopButton stopEvent={stopSong} />
          <Countdown
            timer={timer}
            appData={appData}
            propData={dataCollection}
            action={appData.track ? 'go' : 'stop'}
          />
          <SkipButton skipEvent={startSong} />
        </div>
        <div className="dottedLine"></div>
        <Messages appData={appData} />
      </div>
      <div className="col xs-col-12">
        {appData.answers.map(function(answer, key){
          return <AnswerButton appData={appData} key={key} answerText={answer} propAnswer={answerSelected}/>;
        })} 
      </div>

    </div>
  );
}

export default App;

