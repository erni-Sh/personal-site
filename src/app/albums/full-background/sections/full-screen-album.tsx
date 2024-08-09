import React, { FC, JSX } from 'react';

interface FullScreenAlbumProps {
  backgroundUrl: string,
}

const FullScreenAlbum: FC<FullScreenAlbumProps> = ({ backgroundUrl}): JSX.Element => {
  return (
    <section className="fullAlbums" style={{
      backgroundImage: `url(${backgroundUrl})`
    }}>
      <div className="fullAlbumsContent col-sm-5">
        <h1>Название альбома</h1>
        <p>Описание бла-бла на русскоя языке dolor sit amet, consectetuer <br/>
          &nbsp;&nbsp;&nbsp;Quisque volutpat mattis am. Nullam malesuada erat ut turpis.<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suspendisse urna nibh, nean dignissim
          felis....</p>
        <div className="social-icons">
          <a href="#" className="icon-button shopIcon" target="_blank"><i className="fa fa-headphones"/><span/></a>
          <a href="#" className="icon-button shopIcon" target="_blank"><i className="fa fa-apple"/><span/></a>
          <a href="#" className="icon-button shopIcon" target="_blank"><i className="fa fa-soundcloud"/><span/></a>
          <a href="albumsSingle1.html" className="detailsSocial">Details <i className="fa fa-angle-right"/></a>
        </div>
      </div>
      {/* end fullAlbumsContent */}
    </section>
  );
};

export default FullScreenAlbum;
