import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useModal from '~/hooks/useModal'


const CardDetail = () => {
  const { Modal, open, close, isOpen } = useModal()
  const navigate = useNavigate();
  useEffect(() => {
    open()
  }, [])

  const handleClose = ()=>{
    close();
    setTimeout(()=>{navigate(-1);},1000)
    
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
