import { useImgStatus } from '@/hooks/use-status-img'
import styles from './image-bg.module.scss'

type ImageBGProps = {
  className?: string
  src: string
}

export const ImageBG = ({ src, className = '' }: ImageBGProps) => {
  const bgImageStatus = useImgStatus([src])

  return (
    <div
      className={[
        className,
        styles.imageBG,
        bgImageStatus === 'loading' || bgImageStatus === 'error' ? styles.imageBG_isLoading :
        bgImageStatus === 'loaded' ? styles.imageBG_isLoaded : '',
      ].join(' ')}
      style={{ backgroundImage: `url(${src})` }}
    />
  )
}
