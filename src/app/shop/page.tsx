import React, {FC, JSX} from 'react';
import SectionComingSoon from '@/components/section-coming-soon';
import ShopTop from '@/app/shop/sections/shop-top';
import ShopGrid from '@/app/shop/sections/shop-grid';

const Page: FC = (): JSX.Element => {
  return (<>
    <ShopTop />
    <ShopGrid />
  </>);
};

export default Page;