import { useEffect } from 'react';
import { getScreenType } from '@/redux/selectors/appStateSelectors'
import { setScreenType } from '@/redux/slices/appStateSlice'
import { useDispatch, useSelector } from 'react-redux';

const ResizeListener = () => {
  const dispatch = useDispatch();
  const screenType = useSelector(getScreenType);

  useEffect(() => {
    const updateSize = () => {
      const updatedScreenType =
          window.innerWidth < 605 ? 'mobile'
          : window.innerWidth > 888 ? 'desktop'
          : 'tablet'
      screenType !== updatedScreenType &&
          dispatch(setScreenType(updatedScreenType))

      // update vh for mobile browsers
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, []) //screenType

  return <></>
}

export default ResizeListener
