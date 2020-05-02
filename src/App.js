import React, { useState } from 'react';
import './App.scss';
import './css/solid.css';
import axios from 'axios';
import AudioPlayer from './components/audio-player/index';
import AnswerButton from './components/answer-button/index';

const track = 'https://phish.in/audio/000/034/508/34508.mp3';
const era = 'http://phish.in/api/v1/eras';
const randomShow = 'https://phish.in/api/v1/random-show';
const key = '913f861c0229891ebf44ad2e7d5a9ec24199093ca6666ebe9034bbc78f4eef35beb5384c0928c74cda6941e411b7efca';
const years = ["1983-1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2002", "2003", "2004", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021"];

function App({}) {
  const [track, setTrack] = useState(null);
  const [songCountDown, setsongCountDown] = useState(30);

  function playNewTrack() {
    axios.get(`http://localhost/phish_game_api/?url=${randomShow}`)
    .then(function(response) {
      response = response.data.data;
      console.log('response', response);
      let tracks = response.tracks;
      console.log('tracks', tracks);
      let rndTrack = tracks[Math.floor(Math.random() * tracks.length)];
      console.log('rndTrack', rndTrack);
      setTrack(rndTrack.mp3);
      updateSongTimer()
    });
  }

  function updateSongTimer() {
    setInterval(function() {
      let test = songCountDown -1;
      console.log('sdfsdf', test);
      setsongCountDown(test);
      updateSongTimer();
    }, 1000)
  }

  
  
  
  return (
    <div className="col xs-col-6 xs-offset-3">
      <button onClick={playNewTrack}>test</button>  
      <div className="wave header col xs-col-12">
        <span className="textSongCount xs-text-2">Song 1 / 10</span>
        <div>
          <span className="textSongCountdown xs-text-1 bold">{songCountDown}</span>
        </div>
        {track}
        <AudioPlayer 
          track={track}
        />
      </div>
      <div className="col xs-col-12">
        <AnswerButton />
        <AnswerButton />
        <AnswerButton />
        <AnswerButton />   
      </div>
    </div>
  );
}

export default App;

