import styled from '@emotion/styled'

interface ModalOverlayAndContentProps {
  isOpen: boolean
}

interface ModalContentProps extends ModalOverlayAndContentProps {
  width: number
  height: number
}

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
  transition: opacity 0.5s ease;
  opacity: ${props => (props.isOpen ? 0.99 : 0)};
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
  transform: translateY(${props => (props.isOpen ? 0 : '100vh')});
  transition: transform 0.5s ease;
  &::-webkit-scrollbar {
    display: none;
  }
`
