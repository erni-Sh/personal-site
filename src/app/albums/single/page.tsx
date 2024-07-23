import React, {FC, JSX} from 'react';
import AlbumTop from '@/app/albums/single/sections/album-top';
import AlbumPlaylist from '@/app/albums/single/sections/album-playlist';
import AlbumsPagination from '@/app/albums/single/sections/albums-pagination';

const Page: FC = (): JSX.Element => {
  return (<>
    <AlbumTop />
    <AlbumPlaylist />
    <AlbumsPagination />
  </>);
};

export default Page;