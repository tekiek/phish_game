import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  axios
    .get('http://phish.in/api/v1/eras')
    .then(result => {
      console.log('result', result);
    })

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;

