import React, { FC, JSX } from 'react';
import AlbumPlaylistItem from '@/app/albums/single/sections/album-playlist-item';

const AlbumPlaylist: FC = (): JSX.Element => {
  return (
    <section
      className="albumSingle padding background-properties"
      style={{backgroundImage: 'url(http://theme-brothers.com/AquraHTML/assets/img/albums/single11.jpg)'}}
    >
      <div className="container">
        <div className="sectionTitle paddingBottom">
          <span className="heading-t3"/>
          <h2><a href="albumsSingle1.html">Stunt Vibe</a></h2>
          <span className="heading-b3"/>
        </div>

        <div className="row">
          <div className="col-sm-8">
            <div className="jp-playlist">
              <div className="about-list clearfix">
                <span className="about-name">NAME</span>
                <span className="about-length">LENGTH</span>
              </div>
              <AlbumPlaylistItem />
              <AlbumPlaylistItem />
              <AlbumPlaylistItem />
              <AlbumPlaylistItem />
              <AlbumPlaylistItem />
              <AlbumPlaylistItem />
              <AlbumPlaylistItem />
              <AlbumPlaylistItem />
              <AlbumPlaylistItem />
            </div>
          </div>
          <div className="col-sm-3 col-sm-offset-1">
            <div className="sidebarAlbum">
              <div className="widget">
                <h3>Details</h3>
                <ul>
                  <li>Realease Date:<span>december 15, 2015 </span></li>
                  <li>Catalog:<span>aqura 0150813 </span></li>
                  <li>Label:<span>aqura sound </span></li>
                  <li>Fomat:<span>vinyl,cd </span></li>
                </ul>
              </div>
              {/* end widget */}
              <div className="widget">
                <h3>Instagram</h3>
                <div className="instagram-widget">
                  <ul id="instagram-sidebar-widget" className="clearfix"/>
                </div>
              </div>
              {/* end widget */}
              <div className="widget">
                <h3>Available On</h3>
                <section>
                  <ul id="services">
                    <li>
                      <a href="#">
                        <div><i className="fa fa-lastfm"/></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div><i className="fa fa-soundcloud"/></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div><i className="fa fa-apple"/></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div><i className="fa fa-spotify"/></div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div><i className="fa fa-amazon"/></div>
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              {/* end widget */}
            </div>
            {/* end sidebarAlbum */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumPlaylist;