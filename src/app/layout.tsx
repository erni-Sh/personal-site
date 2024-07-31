import '@/styles/master.scss';
import Header from '@/components/header/header';
import Footer from '@/components/footer';
import AudioPlayer from '@/components/audio-player/audio-player';
import Playlist from '@/components/audio-player/playlist';
import MainFunctionsRunner from '@/system/main-functions-runner';
import Providers from '@/app/providers';

export const metadata = {
  title: 'Ernest Sheremet',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Header />
          <main style={{minHeight: 'calc(100vh - 58px)'}}>
            {children}
          </main>
          <Footer />
          <AudioPlayer />
          <Playlist />
          <MainFunctionsRunner />
        </body>
      </html>
    </Providers>
  )
}
