import axios from 'axios';
import generateYears from './generateAnswers';
const { apiPath, apiRequests } = require('./api');

function fetchTrack(appData, propData) {
  axios.get(`${apiPath.dev}${apiRequests.random}`)
	  .then(function(response) {
	    const tracks = response.data.data.tracks;
	    const rndTrack = tracks[Math.floor(Math.random() * tracks.length)];
	    const trackYear = Number(rndTrack.show_date.split('-')[0]);
	    const answers = generateYears(trackYear);

	    console.log('rndTrack', rndTrack);

	    propData({
	    	track: rndTrack.mp3, 
	    	clock: 30,
	    	songCount: appData.songCount + 1,
	    	answers: answers.sort(),
	    	answer: trackYear,
	    	selected: null,
	    	trackData: rndTrack,
	    });
	  });
}

export default fetchTrack;
