import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE = 'http://theme-brothers.com/AquraHTML/assets/img/content/video.jpg';

const VideoTop: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE}>
      <div className="breadTxt">
        <h1>
          Video
        </h1>
        <p>
          Hello. We are a multi-disciplinary team working together to craft awesome websites,<br/> realise brand
          identities, design for print and capture visual imagery through photography.<br/> Take a look at some of our
          work below.
        </p>
        <a href="#content" data-easing="easeInOutQuint" data-scroll="" data-speed="900" data-url="false">
          View More <i className="fa fa-angle-down"></i>
        </a>
      </div>
    </PageTop>
);
};

export default VideoTop;