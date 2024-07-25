import React, {FC, JSX} from 'react';
import FullScreenAlbum from '@/app/albums/full-background/sections/full-screen-album';


const Page: FC = (): JSX.Element => {
  return <>{
    [
      'http://theme-brothers.com/AquraHTML/assets/img/albums/a1.jpg',
      'http://theme-brothers.com/AquraHTML/assets/img/albums/a2.jpg',
      'http://theme-brothers.com/AquraHTML/assets/img/albums/a3.jpg',
      'http://theme-brothers.com/AquraHTML/assets/img/albums/a4.jpg',
    ].map((url, i) => (
      <FullScreenAlbum backgroundUrl={url} key={i} />
    ))
  }</>
};

export default Page;