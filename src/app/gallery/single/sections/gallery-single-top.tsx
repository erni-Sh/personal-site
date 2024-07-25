import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE=`http://theme-brothers.com/AquraHTML/assets/img/content/gal.jpg`;

const GallerySingleTop: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE}>
      <h2>Gallery <span>Example</span></h2>
      <p>6 March, 2015</p>
      <a href="#content" data-easing="easeInOutQuint" data-scroll data-speed={900} data-url="false">
        View More <i className="fa fa-angle-down"/>
      </a>
    </PageTop>
  );
};

export default GallerySingleTop;