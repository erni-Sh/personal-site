import React, { FC, JSX } from 'react';

const AlbumPlaylistItem: FC = (): JSX.Element => {
  return (
    <div className="trak-item" data-audio="/assets/audio/2.mp3" data-artist="Jack U ft. Kiesza"
         data-thumbnail="/assets/img/albums/thumbnail.png">
      <audio preload="metadata" src="/assets/audio/2.mp3" title="Take You There"/>
      <div className="play-pause-button">
        <div className="center-y-table">
          <i className="fa fa-play"/>
        </div>
      </div>
      <div className="name-artist">
        <div className="center-y-table">
          <h2>
            Jack U ft. Kiesza - Take You There
          </h2>
        </div>
      </div>
      <time className="trak-duration">
        00:00
      </time>
    </div>
  );
};

export default AlbumPlaylistItem;