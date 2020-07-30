import React from 'react';
import './index.scss';

function SoungCount({
  songCount,
}) {
  return (
		<span className="textSongCount xs-text-3 md-text-2">
			Song: <span className="text-white">{songCount} / 10</span>
		</span>
  );
}

export default SoungCount;
