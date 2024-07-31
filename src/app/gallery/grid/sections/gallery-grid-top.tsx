import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE=`http://theme-brothers.com/AquraHTML/assets/img/content/galSg.jpg`;

const GalleryGridTop: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE}>
      <div className="breadTxt">
        <h1>
          albums grid
        </h1>
        <p>
          A portrait is not a likeness. The moment an emotion or fact is transformed into a photograph <br/> it is no
          longer a fact but an opinion. There is no such thing as inaccuracy in a photograph. <br/> All photographs are
          accurate. None of <br/> them is the truth.
        </p>
        <a href="#content" data-easing="easeInOutQuint" data-scroll data-speed={900} data-url="false">
          View More <i className="fa fa-angle-down"/>
        </a>
      </div>
    </PageTop>
);
};

export default GalleryGridTop;