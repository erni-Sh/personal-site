import React, {FC, JSX} from 'react';

const AudioPlayer: FC = (): JSX.Element => {
  return (
    <div className="main-music-player">
      <a className="hide-player-button">
        <i className="fa fa-plus"/>
        <i className="fa fa-minus"/>
      </a>
      <div id="mesh-main-player" className="jp-jplayer" data-audio-src="assets/audio/flute.mp3"
           data-title="See right through ft. Fiora" data-artist="Tensnake"/>
      <div id="mesh-main-player-content" className="mesh-main-player" role="application" aria-label="media player">
        <div className="container">
          <div className="row">
            <div className="left-player-side">
              <div className="mesh-prev">
                <i className="fa fa-step-backward"/>
              </div>
              <div className="mesh-play">
                <i className="fa fa-play"/>
              </div>
              <div className="mesh-pause">
                <i className="fa fa-pause"/>
              </div>
              <div className="mesh-next">
                <i className="fa fa-step-forward"/>
              </div>
              <button id="playlist-toggle" className="jplayerButton">
                <span className="span-1"/>
                <span className="span-2"/>
                <span className="span-3"/>
              </button>
            </div>
            <div className="center-side">
              <div className="mesh-current-time">
              </div>
              <div className="mesh-seek-bar">
                <div className="mesh-play-bar">
                </div>
              </div>
              <div className="mesh-duration">
              </div>
            </div>
            <div className="right-player-side">
              <div className="mesh-thumbnail">
                <img src="assets/img/player/thumbnail.jpg" alt=""/>
              </div>
              <div className="mesh-title">
              </div>
              <div className="mesh-artist">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;