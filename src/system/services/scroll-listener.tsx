import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getIsHeaderCovered } from '@/redux/selectors/appStateSelectors';
import { setIsHeaderCovered } from '@/redux/slices/appStateSlice';

const ScrollListener = () => {
  // const router = useRouter()
  const dispatch = useDispatch();
  // const isVisibleScrollToTop = useSelector(getIsVisibleScrollToTop)
  const isHeaderCovered = useSelector(getIsHeaderCovered);

  // const container =
  //   (typeof window !== 'undefined' &&
  //   document.getElementsByTagName('body')?.[0])

  // -------- CHECK SCROLL POSITION ---------
  useEffect(() => {
    const handleSet = () => {
      const scrollTop = window.scrollY;
      // console.log(scrollTop);

      if (isHeaderCovered !== (window.innerHeight - 67) > scrollTop) {
        dispatch(setIsHeaderCovered(!isHeaderCovered));
      }
      // isVisibleScrollToTop !==
      // container.scrollTop > SIZE_VIS_SCROLL_TO_TOP_IN_PX &&
      // dispatch(setIsVisibleScrollToTop(!isVisibleScrollToTop))
      document.documentElement.style.setProperty('--scrollTop', `${scrollTop}px`)
    }

    handleSet()
    window.addEventListener('scroll', handleSet)
    return () => window.removeEventListener('scroll', handleSet)
  }, [isHeaderCovered]) //isVisibleScrollToTop, isScrollOnTop

  // -------- PRESERVE SCROLL -----------
  // useEffect(() => {
  //   const restorePosition = () => {
  //     const url = router.asPath
  //     const scrollTop = JSON.parse(sessionStorage.getItem(url) || '{}')
  //     container.scrollTo({ top: scrollTop || 0 })
  //   }
  //
  //   const savePosition = () => {
  //     const url = router.asPath
  //     sessionStorage.setItem(url, container.scrollTop.toString())
  //   }
  //
  //   restorePosition()
  //   router.events.on('routeChangeStart', savePosition)
  //   router.events.on('routeChangeComplete', restorePosition)
  //   window.addEventListener('beforeunload', savePosition)
  //
  //   return () => {
  //     router.events.off('routeChangeStart', savePosition)
  //     router.events.off('routeChangeComplete', restorePosition)
  //     window.removeEventListener('beforeunload', savePosition)
  //   }
  // }, [router.asPath])

  return <></>
}

export default ScrollListener
