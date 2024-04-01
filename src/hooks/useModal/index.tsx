import { ReactNode, useRef, useState } from 'react'
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
  isAnimating: boolean
}
interface ModalComponentProps {
  children: ReactNode
  isOpen: boolean
  isAnimating: boolean
  width?: number
  height?: number
  close: () => void
}

const ModalComponent = ({
  isOpen,
  width = 70,
  height = 70,
  isAnimating,
  close,
  children
}: ModalComponentProps) => {
  if (!isOpen) return null

  return createPortal(
    <>
      <ModalOverlay
        isOpen={isAnimating}
        onClick={close}
      />
      <ModalContent
        width={width}
        height={height}
        isOpen={isAnimating}>
        {children}
      </ModalContent>
    </>,
    document.body
  )
}

export const useModal = (initialValue = false): UseModalResult => {
  const [isOpen, setOpen] = useState<boolean>(initialValue)
  const [isAnimating, setAnimating] = useState(false)

  const isLoading = useRef<boolean>(false)

  const open = () => {
    if (isLoading.current) return

    setOpen(true)
    isLoading.current = true
    window.setTimeout(() => {
      setAnimating(true)
      isLoading.current = false
    }, 0)
  }

  const close = () => {
    if (isLoading.current) return

    setAnimating(false)
    isLoading.current = true
    window.setTimeout(() => {
      setOpen(false)
      isLoading.current = false
    }, 1000)
  }

  return { Modal: ModalComponent, open, close, isOpen, isAnimating }
}
export default useModal
