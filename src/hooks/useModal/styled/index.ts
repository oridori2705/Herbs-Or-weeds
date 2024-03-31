import styled from '@emotion/styled'

interface ModalOverlayAndContentProps {
  isOpen: boolean
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
  z-index: 40;
  transition: opacity 1s ease;
  opacity: ${props => (props.isOpen ? 100 : 0)};
  transform: translateX(${props => (props.isOpen ? 0 : '100vw')});
`

export const ModalContent = styled.div<ModalOverlayAndContentProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 70%;
  height: 70%;
  margin: auto;
  border-radius: 0.5rem;
  background-color: white;
  z-index: 40;
  color: black;
  overflow: scroll;
  -ms-overflow-style: none;

  scrollbar-width: none;
  transform: translateY(${props => (props.isOpen ? 0 : '100vh')});
  transition: transform 1s ease;
  &::-webkit-scrollbar {
    display: none;
  }
`
