import React, { FC, JSX } from 'react';

const AlbumsPagination: FC = (): JSX.Element => {
  return (
    <div className="section-block  bkg-grey-ultralight pagination-2">
      <div className="row full-width ">
        <div className="col-sm-6 leftHover" style={{backgroundImage: 'url("http://theme-brothers.com/AquraHTML/assets/img/albums/albFooter.jpg")'}}>
          <a href="albumsSingle3.html" className="pagination-previous">
            <small>Prev</small>
            <span>Strange Clouds</span>
          </a>
        </div>
        <div className="col-sm-6 rightHover" style={{backgroundImage: 'url("http://theme-brothers.com/AquraHTML/assets/img/albums/albFooter.jpg")'}}>
          <a href="albumsSingle1.html" className="pagination-next ">
            <small>Next</small>
            <span>Noon XOXO</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlbumsPagination;