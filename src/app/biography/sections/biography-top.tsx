import React, { FC, JSX } from 'react';
import PageTop from '@/components/page-top';

const BG_IMAGE = 'http://theme-brothers.com/AquraHTML/assets/img/content/bio.jpg';

const BiographyTop: FC = (): JSX.Element => {
  return (
    <PageTop backgroundImageUrl={BG_IMAGE}>
      <h1>
        Wanda Valdis
      </h1>
      <p>
        Theres an old saying, That what doesnt kill you, makes you stronger I dont believe that. <br/> I think the
        things that try to kill you make you angry and sad. Strength comes<br/> from the good things - your family, your
        friends,<br/> the satisfaction of hard work.
      </p>
      <a href="#content" data-easing="easeInOutQuint" data-scroll="" data-speed="900" data-url="false">
        View More <i className="fa fa-angle-down"></i>
      </a>
    </PageTop>
  );
};

export default BiographyTop;