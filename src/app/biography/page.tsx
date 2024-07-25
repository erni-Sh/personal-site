import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import BiographyTop from '@/app/biography/sections/biography-top';
import BiographyContent from '@/app/biography/sections/biography-content';

const Page: FC = (): JSX.Element => {
  return (<>
    <BiographyTop />
    <BiographyContent />
  </>);
};

export default Page;