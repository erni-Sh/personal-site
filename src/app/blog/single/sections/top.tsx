import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE = 'http://theme-brothers.com/AquraHTML/assets/img/blog/blogHeader3.jpg';

const Top: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE}>
      <div className="breadTxt">
        <h1>
          Blog Single
        </h1>
        <p>
          Strength does not come from winning. Your struggles develop your strengths. <br/> When you go through
          hardships and decide not to surrender,<br/> that is strength. The worst thing I can be is the
          same<br/> as everybody else. I hate that.
        </p>
        <a href="#content" data-easing="easeInOutQuint" data-scroll data-speed={900} data-url="false">
          View More <i className="fa fa-angle-down"/>
        </a>
      </div>
    </PageTop>

);
};

export default Top;