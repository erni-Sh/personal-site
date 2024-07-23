import React, { FC, JSX } from 'react';
import AlbumsGridItem from '@/components/albums-grid-item';

const AlbumsGrid: FC = (): JSX.Element => {
  const filterStatuses = [ 'All',  'New',  'Best Seller',  'Most Listen' ];

  const albums = ['new', 'new', 'most', 'most', 'most', 'most', 'new', 'new', 'new', 'new', 'most', 'most']

  return (<>
    <section className="aquraFilter paddingGrid albumFilter" id="content"
             style={{backgroundColor: 'white'}}
    >
      <div className="container">
        {/* start blog-filter-category */}
        <div className="categories">
          <ul className="clearfix" data-option-key="filter">
            <li><a href="#"><i className="fa fa-filter"/></a></li>
            {filterStatuses.map(status => (
              <li><a href="#" className="selected" data-option-value="*">{status}</a></li>
            ))}
          </ul>
        </div>

        <div className="aqura-filter-content list-albums">
          <ul className="list-feature clearfix" style={{flexWrap: 'wrap'}}>
            {albums.map(status => (
              <AlbumsGridItem status={status} />
            ))}
          </ul>
        </div>
        {/* end aqura-filter-cotent */}
        {/* end filter */}
      </div>
      {/* end container */}
    </section>
  </>
  );
};

export default AlbumsGrid;