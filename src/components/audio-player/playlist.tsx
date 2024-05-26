import React, {FC, JSX} from 'react';

const Playlist: FC = (): JSX.Element => {
  return (
    <div className="playlist-wrapper" id="playlist-wrapper">
      <div className="jp-playlist container">
        <div className="about-list clearfix">
          <span className="about-name">NAME</span>
          <span className="about-length">LENGTH</span>
          <span className="about-available">AVAILABLE ON</span>
        </div>
        <div className="trak-item" data-audio="assets/audio/flute.mp3" data-artist="Tensnake"
             data-thumbnail="assets/img/player/thumbnail.png" data-id="trak-200">
          <audio preload="metadata" src="assets/audio/flute.mp3" title="See right through ft. Fiora"/>
          <div className="additional-button">
            <div className="center-y-table">
              <a href="#">
                <i className="fa fa-apple"/>
              </a>
              <a href="#">
                <i className="fa fa-soundcloud"/>
              </a>
            </div>
          </div>
          <div className="play-pause-button">
            <div className="center-y-table">
              <i className="fa fa-play"/>
            </div>
          </div>
          <div className="name-artist">
            <div className="center-y-table">
              <h2>
                Tensnake - See Right Through Ft. Fiora
              </h2>
            </div>
          </div>
          <time className="trak-duration">
            00:00
          </time>
        </div>
        <div className="trak-item" data-audio="assets/audio/2.mp3" data-artist="Jack U ft. Kiesza"
             data-thumbnail="assets/img/player/thumbnail.png" data-id="trak-201">
          <audio preload="metadata" src="assets/audio/2.mp3" title="Take You There"/>
          <div className="additional-button">
            <div className="center-y-table">
              <a href="#">
                <i className="fa fa-apple"/>
              </a>
              <a href="#">
                <i className="fa fa-soundcloud"/>
              </a>
            </div>
          </div>
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
        <div className="trak-item" data-audio="assets/audio/3.mp3" data-artist="Bob Sinclair"
             data-thumbnail="assets/img/player/thumbnail.png" data-id="trak-201">
          <audio preload="metadata" src="assets/audio/3.mp3" title="Cinderella"/>
          <div className="additional-button">
            <div className="center-y-table">
              <a href="#">
                <i className="fa fa-apple"/>
              </a>
              <a href="#">
                <i className="fa fa-soundcloud"/>
              </a>
            </div>
          </div>
          <div className="play-pause-button">
            <div className="center-y-table">
              <i className="fa fa-play"/>
            </div>
          </div>
          <div className="name-artist">
            <div className="center-y-table">
              <h2>
                Bob Sinclair - Cinderella
              </h2>
            </div>
          </div>
          <time className="trak-duration">
            00:00
          </time>
        </div>
        <div className="trak-item" data-audio="assets/audio/4.mp3" data-artist="Yuna"
             data-thumbnail="assets/img/player/thumbnail.png" data-id="trak-201">
          <audio preload="metadata" src="assets/audio/4.mp3" title="Lullabies"/>
          <div className="additional-button">
            <div className="center-y-table">
              <a href="#">
                <i className="fa fa-apple"/>
              </a>
              <a href="#">
                <i className="fa fa-soundcloud"/>
              </a>
            </div>
          </div>
          <div className="play-pause-button">
            <div className="center-y-table">
              <i className="fa fa-play"/>
            </div>
          </div>
          <div className="name-artist">
            <div className="center-y-table">
              <h2>
                Yuna - Lullabies
              </h2>
            </div>
          </div>
          <time className="trak-duration">
            00:00
          </time>
        </div>
      </div>
    </div>
  );
};

export default Playlist;