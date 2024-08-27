import React, { FC, JSX } from 'react';
import BlogGridTop from '@/app/blog/grid/sections/blog-grid-top';
import BlogGrid from '@/app/blog/grid/sections/blog-grid';
import { API_WP_URL, WP_Paths } from '@/redux/api/apiResoursePaths';
import { WP_REST_API_Post } from 'wp-types';

const getData = async () => {
  let posts = null;
  try {
    const res = await fetch(
      API_WP_URL + WP_Paths.POSTS,
      {
        // headers: new Headers({ Authorization: FDAuthorization }),
      },
    )
    posts = (await res.json()) as WP_REST_API_Post[];
  } catch (e) {
    console.log(e)
  }

  return posts;
}

const Page: FC = async (): Promise<JSX.Element> => {
  const posts: WP_REST_API_Post[] | null = await getData();

  return (<>
    <BlogGridTop />
    {!posts ? <></> :
      <BlogGrid posts={posts} />}
  </>);
};

export default Page;
