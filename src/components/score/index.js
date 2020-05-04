import React from 'react';
import './index.scss';

function Score({
  score
}) {

  // // Countdown Clock
  // useEffect(() => {
  //   if (typeof appData.clock === 'number' && appData.track !== null ) {
  //     if (appData.clock === 0) {
  //       stopSong();
  //     } else {
  //       timer = setTimeout(() => {
  //         dataCollection({clock: appData.clock - 1});
  //       }, 1000);
  //     }
  //   }
  // }, [appData]);

  return (
    <span className="textScoreCount xs-text-3 md-text-2">
      Score: {score}
    </span>
  );
}

export default Score;
