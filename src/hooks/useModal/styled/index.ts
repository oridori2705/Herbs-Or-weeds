import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

interface ModalOverlayAndContentProps {
  isOpen: boolean
}

interface ModalContentProps extends ModalOverlayAndContentProps {
  width: number
  height: number
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.99;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 0.99;
  }
  to {
    opacity: 0;
  }
`

// ModalContent의 애니메이션 정의
const slideIn = keyframes`
  from {
    transform: translateY(100vh);
  }
  to {
    transform: translateY(0);
  }
`

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100vh);
  }
`

export const ModalOverlay = styled.div<ModalOverlayAndContentProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  animation: ${props => (props.isOpen ? fadeIn : fadeOut)} 0.5s forwards;
`

export const ModalContent = styled.div<ModalContentProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: ${props => `${props.width}%`};
  height: ${props => `${props.height}%`};
  margin: auto;
  border-radius: 0.5rem;
  background-color: white;
  z-index: 50;
  color: black;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  animation: ${props => (props.isOpen ? slideIn : slideOut)} 0.5s forwards;

  &::-webkit-scrollbar {
    display: none;
  }
`
