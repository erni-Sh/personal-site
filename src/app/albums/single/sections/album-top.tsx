import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE = `http://theme-brothers.com/AquraHTML/assets/img/albums/single1.jpg`;

const AlbumTop: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE} />
  );
};

export default AlbumTop;