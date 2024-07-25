import React, {FC, JSX} from 'react';
import GalleryGridTop from '@/app/gallery/grid/sections/gallery-grid-top';
import GalleryGrid from '@/app/gallery/grid/sections/gallery-grid';

const Page: FC = (): JSX.Element => {
  return (<>
    <GalleryGridTop />
    <GalleryGrid />
  </>);
};

export default Page;