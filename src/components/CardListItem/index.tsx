import { useCallback, useRef, useState } from 'react'
import {
  CardContainer,
  Container,
  DescriptionContainer,
  ImageContainer,
  SeasonContainer
} from './styled'
interface CardListItemProps {
  id: string
  name: string
  scientificName: string
  image: string
  medicineName: string
  isHerb: boolean
}

const CardListItem = ({
  id,
  name,
  scientificName,
  image,
  medicineName,
  isHerb
}: CardListItemProps) => {
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

      const tiltX = (4 / 30) * y - 20
      const tiltY = (-1 / 5) * x + 20

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
    <Container>
      <CardContainer
        tiltX={tiltX}
        tiltY={tiltY}
        overlayX={overlayX}
        overlayY={overlayY}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        isHerb={isHerb}>
        <SeasonContainer>
          <ImageContainer img_src={image} />
          <DescriptionContainer>
            <p>{id}</p>
            <h3>{name}</h3>
            <p>{medicineName}</p>
            <p>{scientificName}</p>
          </DescriptionContainer>
        </SeasonContainer>
      </CardContainer>
    </Container>
  )
}
export default CardListItem
