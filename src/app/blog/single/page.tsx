import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import Top from '@/app/blog/single/sections/top';
import BlogSingle from '@/app/blog/single/sections/blog-single';

const Page: FC = (): JSX.Element => {
  return (<>
    <Top />
    <BlogSingle />
  </>);
};

export default Page;