import React, {FC, JSX} from 'react';
import AlbumsGridItem from '@/components/albums-grid-item';

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
            <AlbumsGridItem />
            <AlbumsGridItem />
            <AlbumsGridItem />
            <AlbumsGridItem />
          </ul>
        </div>
        {/* end list-albums */}
      </div>
      {/* end container */}
    </section>
  );
};

export default HomeAlbums;