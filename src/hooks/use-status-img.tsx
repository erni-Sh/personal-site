import { useEffect, useState } from 'react'

export const useImgStatus = (srcArray: string[]) => {
  // "loaded" for exclude blinking on reload
  const [imgStatus, setImgStatus] = useState<'loading' | 'loaded' | 'error'>(
    'loading',
  )

  useEffect((): (() => void) => {
    let isMounted = true

    if (!srcArray.length) {
      // empty array on unvisible element
      setImgStatus('loading')
    } else {
      cacheImages(srcArray).then(
        () => isMounted && setImgStatus('loaded'),
        () => isMounted && setImgStatus('error'),
      )
    }
    return () => (isMounted = false)
  }, [srcArray])

  return imgStatus
}

export const cacheImages = async (srcArray: string[]) => {
  const promises = srcArray.map((src: string) => {
    return new Promise(function (resolve, reject) {
      const img = new Image()
      img.src = src
      if (img.complete) resolve(img)
      img.onload = () => resolve(img)
      img.onerror = () => reject(src)
    })
  })

  await Promise.all(promises)
}
