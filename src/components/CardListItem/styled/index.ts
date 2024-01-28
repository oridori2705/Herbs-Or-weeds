import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import backgroundImage from '~/assets/images/background.jpg'

interface CardContainerProps {
  tiltX: number
  tiltY: number
  overlayX: number
  overlayY: number
  isHerb: boolean
}

export const CardContainer = styled.div<CardContainerProps>`
  border-radius: 18px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease-out;
  transform: perspective(200px) rotateX(${props => props.tiltX}deg)
    rotateY(${props => props.tiltY}deg);

  z-index: 1;

  &:hover {
    will-change: transform;
  }

  ${props =>
    props.isHerb &&
    css`
      &::before {
        content: '';
        background: linear-gradient(
            45deg,
            #ff0000 0%,
            #ff9a00 10%,
            #d0de21 20%,
            #4fdc4a 30%,
            #3fdad8 40%,
            #2fc9e2 50%,
            #1c7fee 60%,
            #5f15f2 70%,
            #ba0cf8 80%,
            #fb07d9 90%,
            #ff0000 100%
          )
          repeat 0% 0% / 300% 100%;
        position: absolute;
        inset: -5px;
        border-radius: 16px;
        filter: blur(8px);
        z-index: 0;
        animation: ${rgb} 6s linear infinite;
      }
    `}
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 300px;
    z-index: 5;
    ${props =>
      props.isHerb &&
      css`
        background: linear-gradient(
          120deg,
          transparent 10%,
          rgba(255, 219, 112, 0.4) 20%,
          rgba(132, 50, 255, 0.4) 25%,
          transparent 60%,
          rgba(255, 219, 112, 0.4) 68%,
          rgba(132, 50, 255, 0.4) 76%,
          transparent 100%
        );
        filter: brightness(1.5) opacity(${props.overlayX === 0 ? 0 : 0.3});
        background-size: 150% 150%;
        background-position: ${props.overlayX / 5 + props.overlayY / 5}%;
      `}
  }
`

export const SeasonContainer = styled.div`
  z-index: 1;
  border-radius: 15px;
  width: 100%;
  height: 300px;
  background-image: url(${backgroundImage});
  filter: hue-rotate(165deg);
`

export const ImageContainer = styled.div<{ img_src: string }>`
  width: 100%;
  height: 55%;
  background: linear-gradient(#fff0 0%, #fff0 70%, #1d1d1d 100%),
    url(${props => props.img_src});
  filter: hue-rotate(195deg);

  background-size: 100% 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`
export const DescriptionContainer = styled.div`
  padding: 10px;
  padding-top: 20px;
  text-shadow:
    -1px 0px black,
    0px 1px black,
    1px 0px black,
    0px -1px black;
  display: flex;
  flex-direction: column;
  color: white;
  height: 45%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: linear-gradient(#1d1d1d 0%, #fff0 70%, #fff0 100%);
`

const rgb = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
