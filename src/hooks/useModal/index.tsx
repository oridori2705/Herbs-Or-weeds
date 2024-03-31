import { ReactNode, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalContent, ModalOverlay } from './styled'

interface UseModalResult {
  Modal: ({ children , isOpen, close}:ModalComponentProps) => JSX.Element
  open: () => void
  close: () => void
  isOpen: boolean
}
interface ModalComponentProps {
  children: ReactNode
  isOpen: boolean
  close: () => void
}

const ModalComponent = ({ isOpen, close, children }: ModalComponentProps) => {
  return createPortal(
    <>
      <ModalOverlay
        isOpen={isOpen}
        onClick={close}
      />
      <ModalContent isOpen={isOpen}>{children}</ModalContent>
    </>,
    document.getElementById('root')!
  )
}

export const useModal = (initialValue = false) :UseModalResult => {
  const [isOpen, setOpen] = useState<boolean>(initialValue)

  const open = () => setOpen(true)
  const close = () => setOpen(false)

  return { Modal: ModalComponent, open, close, isOpen }
}
export default useModal
