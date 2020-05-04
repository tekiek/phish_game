import React from 'react';
import './index.scss';

function SoungCount({
  songCount,
}) {
  return (
		<span className="textSongCount xs-text-3 md-text-2">
			Song {songCount} / 10
		</span>
  );
}

export default SoungCount;
