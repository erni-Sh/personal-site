interface Route {
  path: string,
}
// Record<string, Route>
const ROUTES = {
  MAIN: {
    path: '/',
  },

  ALBUMS_GRID: {
    path: '/albums/grid',
  },
  ALBUMS_FULL_BACKGROUND: {
    path: '/albums/full-background',
  },
  ALBUMS_SINGLE: {
    path: '/albums/single',
  },

  EVENTS: {
    path: '/events',
  },

  BLOG_GRID: {
    path: '/blog/grid',
  },
  BLOG_SIDEBAR: {
    path: '/blog/sidebar',
  },
  BLOG_SINGLE: {
    path: '/blog/single',
  },

  GALLERY_GRID: {
    path: '/gallery/grid',
  },
  GALLERY_SCROLL: {
    path: '/gallery/scroll',
  },
  GALLERY_SINGLE: {
    path: '/gallery/single',
  },

  BIOGRAPHY: {
    path: '/biography',
  },
  VIDEO: {
    path: '/video',
  },

  CONTACT: {
    path: '/contact',
  },

  SHOP: {
    path: '/shop',
  },

}

export default ROUTES;