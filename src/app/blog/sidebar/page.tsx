import React, {FC, JSX} from 'react';
import Top from '@/app/blog/sidebar/sections/top';
import BlogSidebarRight from '@/app/blog/sidebar/sections/blog-sidebar-right';

const Page: FC = (): JSX.Element => {
  return (<>
    <Top />
    <BlogSidebarRight />
  </>);
};

export default Page;