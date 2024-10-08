import { useCallback, useRef, useState } from 'react'
import {
  CardContainer,
  DescriptionContainer,
  ImageContainer,
  SeasonContainer
} from './styled'
export interface CardListItemProps {
  id: string
  name: string
  scientificName: string
  image: string
  medicineName: string
  isHerb: boolean
  size: number
}

const CardListItem = ({
  id,
  name,
  scientificName,
  image,
  medicineName,
  isHerb,
  size
}: CardListItemProps) => {
  const width = size
  const height = size + 100
  const [tiltX, setTiltX] = useState(0)
  const [tiltY, setTiltY] = useState(0)
  const [overlayX, setOverlayX] = useState(0)
  const [overlayY, setOverlayY] = useState(0)
  const animationFrameIdRef = useRef(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current)
    }

    animationFrameIdRef.current = requestAnimationFrame(() => {
      const x = e.nativeEvent.offsetX
      const y = e.nativeEvent.offsetY

      setOverlayX(x)
      setOverlayY(y)

      const tiltX = (4 / 30) * ((y / height) * 300) - 20
      const tiltY = (-1 / 5) * ((x / width) * 200) + 20
      setTiltX(tiltX)
      setTiltY(tiltY)
    })
  }

  const handleMouseLeave = useCallback(() => {
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current)
    }
    setTiltX(0)
    setTiltY(0)
    setOverlayX(0)
    setOverlayY(0)
  }, [])

  return (
    <CardContainer
      tiltX={tiltX}
      tiltY={tiltY}
      overlayX={overlayX}
      overlayY={overlayY}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      isHerb={isHerb}
      width={width}
      height={height}>
      <SeasonContainer
        width={width}
        height={height}>
        <ImageContainer img_src={image} />
        <DescriptionContainer>
          <p>{id}</p>
          <h3>{name}</h3>
          <p>{medicineName}</p>
          <p>{scientificName}</p>
        </DescriptionContainer>
      </SeasonContainer>
    </CardContainer>
  )
}
export default CardListItem
