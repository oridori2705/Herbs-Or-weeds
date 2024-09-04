import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useModal from '~/hooks/useModal'

const CardDetail = () => {
  const { Modal, open, close, isOpen } = useModal()
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
    }, 0)
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        close={handleClose}>
        <div>Modal 테스트</div>
      </Modal>
    </div>
  )
}
export default CardDetail
