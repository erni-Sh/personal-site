import React, {FC, JSX} from 'react';

const HomeAlbums: FC = (): JSX.Element => {
  return (
    <section className="padding albumsHome hide-section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="sectionTitle paddingBottom">
              <span className="heading-t3"/>
              <h2><a href="albumsFullBackground.html">Discography</a></h2>
              <span className="heading-b3"/>
            </div>
            {/* end sectionTtile */}
          </div>
          {/* end col-sm-12 */}
        </div>
        <div className="list-albums">
          <ul className="list-feature col-md-12 col-xs-12 col-sm-12">
            <li className="col-md-3 col-sm-3 col-xs-12">
              <div className="album-icon">
                    <span className="thumbs-album">
                      <a href="albumsSingle1.html"><img width={270} height={270} src="assets/img/albums/albumCover.png"
                                                        className="attachment-album-thumbnail wp-post-image"
                                                        alt="album-cover-1"/></a>
                    </span>
                <span className="disk"/>
              </div>
              {/* END ALBUM ICON */}
              <div className="name">
                <h3>Noon Xoxo</h3>
                <p>Chillout</p>
              </div>
              {/* end name */}
            </li>
            <li className="col-md-3 col-sm-3 col-xs-12">
              <div className="album-icon albumIcon1">
                    <span className="thumbs-album">
                      <a href="albumsSingle3.html"><img width={270} height={270} src="assets/img/albums/albumCover.png"
                                                        className="attachment-album-thumbnail wp-post-image"
                                                        alt="album-cover-1"/></a>
                    </span>
                <span className="disk"/>
              </div>
              <div className="name">
                <h3>Stunt Vibe</h3>                  <p>Chillout</p>
              </div>
            </li>
            <li className="col-md-3 col-sm-3 col-xs-12">
              <div className="album-icon albumIcon2">
                    <span className="thumbs-album">
                      <a href="albumsSingle4.html"><img width={270} height={270} src="assets/img/albums/albumCover.png"
                                                        className="attachment-album-thumbnail wp-post-image"
                                                        alt="album-cover-1"/></a>
                    </span>
                <span className="disk"/>
              </div>
              <div className="name">
                <h3>Strange Clouds</h3>                <p>Chillout</p>
              </div>
            </li>
            <li className="col-md-3 col-sm-3 col-xs-12">
              <div className="album-icon albumIcon3">
                    <span className="thumbs-album">
                      <a href="albumsSingle2.html"><img width={270} height={270} src="assets/img/albums/albumCover.png"
                                                        className="attachment-album-thumbnail wp-post-image"
                                                        alt="album-cover-1"/></a>
                    </span>
                <span className="disk"/>
              </div>
              <div className="name">
                <h3>Natural Earth</h3>                <p>Chillout</p>
              </div>
            </li>
          </ul>
        </div>
        {/* end list-albums */}
      </div>
      {/* end container */}
    </section>
  );
};

export default HomeAlbums;