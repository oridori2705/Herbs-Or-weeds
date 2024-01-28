import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const skeletonZoomIn = keyframes`
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  `

const skeletonLoading = keyframes`
    0% {
      background-position-x: 100%;
    }
    50% {
      background-position-x: -100%;
    }
    100% {
      background-position-x: -100%;
    }
  `

const Base = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-image: linear-gradient(
    90deg,
    #6c6e70 0%,
    #828282 10%,
    #6c6e70 20%
  );
  background-size: 200% 100%;
  background-position: 0 center;
  box-shadow: 1px 5px 15px rgba(0, 0, 0, 0.6);
  animation:
    ${skeletonZoomIn} 0.2s ease-out,
    ${skeletonLoading} 2s infinite linear;
`

export default Base
