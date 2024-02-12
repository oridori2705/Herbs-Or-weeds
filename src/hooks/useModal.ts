import { useEffect, useRef, useState } from 'react'

const useModal = () => {
  const modalRef = useRef<HTMLUListElement | null>(null)
  const [isShow, setIsShow] = useState(false)

  const handleOutsideClick = (e: MouseEvent) => {
    const isOutsideClick =
      modalRef.current &&
      e.target instanceof Element &&
      !modalRef.current.contains(e.target)

    if (isOutsideClick) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    if (isShow) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isShow])

  return { modalRef, isShow, setIsShow }
}
export default useModal
