import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useModal from '~/hooks/useModal'

const CardDetail = () => {
  const { Modal, open, close, isOpen, isAnimating } = useModal()
  const timeOutId = useRef<number | null>(null)
  const navigate = useNavigate()
  useEffect(() => {
    open()
  }, [])

  const handleClose = () => {
    if (timeOutId.current) return
    close()
    timeOutId.current = window.setTimeout(() => {
      navigate(-1)
      timeOutId.current = null
    }, 1000)
  }

  return (
    <div>
      <Modal
        isAnimating={isAnimating}
        isOpen={isOpen}
        close={handleClose}>
        <div>Modal 테스트</div>
      </Modal>
    </div>
  )
}
export default CardDetail
