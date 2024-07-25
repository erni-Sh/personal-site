import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import BlogGridTop from '@/app/blog/grid/sections/blog-grid-top';
import BlogGrid from '@/app/blog/grid/sections/blog-grid';

const Page: FC = (): JSX.Element => {
  return (<>
    <BlogGridTop />
    <BlogGrid />
  </>);
};

export default Page;