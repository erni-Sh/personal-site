import PageLoader from '@/app/main/sections/page-loader';
import BreadCrumb from '@/app/main/sections/bread-crumb';
import AudioPlayer from '@/components/audio-player/audio-player';
import Playlist from '@/components/audio-player/playlist';
import Header from '@/components/header';
import HomeAlbums from '@/app/main/sections/home-albums';
import Events from '@/app/main/sections/events';
import CountDown from '@/app/main/sections/count-down';
import HomeBlog from '@/app/main/sections/home-blog';
import HomeBranding from '@/app/main/sections/home-branding';
import HomeVideo from '@/app/main/sections/home-video';
import HomeGallery from '@/app/main/sections/home-gallery';
import HomeShop from '@/app/main/sections/home-shop';
import Footer from '@/components/footer';

const MainPage: FC = (): JSX.Element => {
  return (
    <main>
      {/*<PageLoader />*/}
      <BreadCrumb />
      {/*<AudioPlayer />*/}
      {/*<Playlist />*/}
      {/*<Header />*/}
      <HomeAlbums />
      <Events />
      <CountDown />
      <HomeBlog />
      <HomeBranding />
      <HomeVideo />
      <HomeGallery />
      <HomeShop />
      {/*<Footer />*/}
    </main>
  );
}

export default MainPage;