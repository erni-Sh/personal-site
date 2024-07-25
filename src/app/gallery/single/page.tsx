import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import GallerySingleTop from '@/app/gallery/single/sections/gallery-single-top';
import GallerySingleGrid from '@/app/gallery/single/sections/gallery-single-grid';

const Page: FC = (): JSX.Element => {
  return (<>
    <GallerySingleTop />
    <GallerySingleGrid />
  </>);
};

export default Page;