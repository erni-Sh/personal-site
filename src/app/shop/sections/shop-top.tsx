import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE = 'http://theme-brothers.com/AquraHTML/assets/img/content/shop.jpg';

const ShopTop: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE}>
      <h1>
        Shop Online
      </h1>
      <p>
        Design is the method of putting form and content together. Design, just as art, <br/> has multiple definitions;
        there is no single definition. Design can be art. <br/>Design can be aesthetics. Design is so simple, thats why
        it is <br/> so complicated.
      </p>
      <a href="#content" data-easing="easeInOutQuint" data-scroll data-speed={900} data-url="false">
        View More <i className="fa fa-angle-down"/>
      </a>
    </PageTop>
  );
};

export default ShopTop;