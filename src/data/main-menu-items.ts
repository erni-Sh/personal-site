import ROUTES from '@/data/routes';

interface MenuItem {
  link: string | undefined,
  title: string,
  subMenu?: {
    link: string,
    title: string,
  }[]
}

const mainMenuItems: MenuItem[] = [
  { link: undefined, title: 'home', subMenu: [
    { link: ROUTES.MAIN.path, title: 'home star' },
    { link: ROUTES.MAIN.path, title: 'home royal slider' },
    { link: ROUTES.MAIN.path, title: 'home video' },
  ]},
  { link: undefined, title: 'discography', subMenu: [
    { link: ROUTES.ALBUMS_FULL_BACKGROUND.path, title: 'albums full background' },
    { link: ROUTES.ALBUMS_GRID.path, title: 'albums grid' },
    { link: ROUTES.ALBUMS_SINGLE.path, title: 'album description' },
  ]},
  { link: ROUTES.EVENTS.path, title: 'events' },
  { link: undefined, title: 'blog', subMenu: [
    { link: ROUTES.BLOG_GRID.path, title: 'blog grid' },
    { link: ROUTES.BLOG_SIDEBAR.path, title: 'blog sidebar' },
    { link: ROUTES.BLOG_SINGLE.path, title: 'blog single' },
  ]},
  { link: undefined, title: 'gallery', subMenu: [
    { link: ROUTES.GALLERY_GRID.path, title: 'gallery grid' },
    { link: ROUTES.GALLERY_SCROLL.path, title: 'gallery scroll' },
    { link: ROUTES.GALLERY_SINGLE.path, title: 'gallery single' },
  ]},
  { link: undefined, title: 'Other Pages', subMenu: [
    { link: ROUTES.BIOGRAPHY.path, title: 'Biography' },
    { link: ROUTES.VIDEO.path, title: 'Video' },
  ]},
  { link: ROUTES.CONTACT.path, title: 'contact' },
  { link: ROUTES.SHOP.path, title: 'shop' },
]

export default mainMenuItems;