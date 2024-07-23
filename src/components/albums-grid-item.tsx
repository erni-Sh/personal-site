import React, { FC, JSX } from 'react';

interface AlbumsGridItemProps {
  status?: string,
}

const AlbumsGridItem: FC<AlbumsGridItemProps> = ({status = ''}): JSX.Element => {
  return (
    <li className={`col-md-3 col-sm-3 col-xs-12 ${status}`}>
      <div className="album-icon">
        <span className="thumbs-album">
          <a href="albumsSingle1.html">
            <img width={270} height={270} src="/assets/img/albums/albumCover.png"
                 className="attachment-album-thumbnail wp-post-image"
                 alt="album-cover-1"/>
          </a>
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
  );
};

export default AlbumsGridItem;