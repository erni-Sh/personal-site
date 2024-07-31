import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE = 'http://theme-brothers.com/AquraHTML/assets/img/blog/header.jpg';

const BlogGridTop: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE}>
      <div className="breadTxt">
        <h1>
          Blog List
        </h1>
        <p>
          Your time is limited, don’t waste it living someone else’s life. Don’t be trapped<br/>by dogma, which
          is living the result of other people’s thinking.<br/> Don’t let the noise of other opinions
          drown<br/> your own inner voice.
        </p>
        <a href="#content" data-easing="easeInOutQuint" data-scroll data-speed={900} data-url="false">
          View More <i className="fa fa-angle-down"/>
        </a>
      </div>
    </PageTop>
);
};

export default BlogGridTop;