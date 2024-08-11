import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import BlogGridTop from '@/app/blog/grid/sections/blog-grid-top';
import BlogGrid from '@/app/blog/grid/sections/blog-grid';
import { GetServerSideProps } from 'next';
import { API_WP_URL, WP_Paths } from '@/redux/api/apiResoursePaths';

const getData = async () => {
  let posts = null
  try {
    const res = await fetch(
      API_WP_URL + WP_Paths.POSTS,
      {
        // headers: new Headers({ Authorization: FDAuthorization }),
      },
    )
    posts = (await res.json())
  } catch (e) {
    console.log(e)
  }

  return posts;
}

const Page: FC = async (): Promise<JSX.Element> => {
  const posts = await getData();

  // @ts-ignore
  console.log(posts?.map(p => p.title.rendered ));

  return (<>
    <BlogGridTop />
    <BlogGrid />
  </>);
};

export default Page;
