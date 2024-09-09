import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalContent, ModalOverlay } from './styled'

interface UseModalResult {
  Modal: ({
    children,
    isOpen,
    close
  }: ModalComponentProps) => JSX.Element | null
  open: () => void
  close: () => void
  isOpen: boolean
}
interface ModalComponentProps {
  children: ReactNode
  isOpen: boolean
  width?: number
  height?: number
  close: () => void
}

const ModalComponent = ({
  isOpen,
  width = 70,
  height = 70,
  close,
  children
}: ModalComponentProps) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(isOpen)

  const handleTransitionEnd = () => {
    if (!isAnimating) {
      close()
    }
  }

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
    }
  }, [isOpen])

  return isOpen
    ? createPortal(
        <>
          <ModalOverlay
            isOpen={isAnimating}
            onClick={() => setIsAnimating(false)}
            onAnimationEnd={handleTransitionEnd}
          />
          <ModalContent
            width={width}
            height={height}
            isOpen={isAnimating}
            onAnimationEnd={handleTransitionEnd}>
            {children}
          </ModalContent>
        </>,
        document.body
      )
    : null
}

export const useModal = (initialValue = false): UseModalResult => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  return {
    Modal: ModalComponent,
    open,
    close,
    isOpen
  }
}
export default useModal
