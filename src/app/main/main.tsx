import {FC, JSX} from 'react';
import BreadCrumb from './sections/bread-crumb';
import HomeAlbums from './sections/home-albums';
import Events from './sections/events';
import CountDown from './sections/count-down';
import HomeBlog from './sections/home-blog';
import HomeBranding from './sections/home-branding';
import HomeVideo from './sections/home-video';
import HomeGallery from './sections/home-gallery';
import HomeShop from './sections/home-shop';

const MainPage: FC = (): JSX.Element => {
  return (
    <main>
      <BreadCrumb />
      <HomeAlbums />
      {/*<Events />*/}
      <CountDown />
      <HomeBlog />
      <HomeBranding />
      <HomeVideo />
      <HomeGallery />
      <HomeShop />
    </main>
  );
}

export default MainPage;