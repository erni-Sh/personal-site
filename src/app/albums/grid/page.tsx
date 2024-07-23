import React, {FC, JSX} from 'react';
import AlbumsSlider from '@/app/albums/grid/sections/albums-slider';
import AlbumsGrid from '@/app/albums/grid/sections/albums-grid';

const Page: FC = (): JSX.Element => {
  return (
    <>
      <AlbumsSlider />
      <AlbumsGrid />
    </>
  );
};

export default Page;