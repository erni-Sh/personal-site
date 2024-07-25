import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import GalleryParallax from '@/app/gallery/scroll/sections/gallery-parallax';

const Page: FC = (): JSX.Element => {
  return (<>
    <GalleryParallax />
  </>);
};

export default Page;