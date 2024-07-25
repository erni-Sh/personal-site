import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import VideoTop from '@/app/video/sections/video-top';
import VideoGrid from '@/app/video/sections/video-grid';

const Page: FC = (): JSX.Element => {
  return (<>
    <VideoTop />
    <VideoGrid />
  </>);
};

export default Page;