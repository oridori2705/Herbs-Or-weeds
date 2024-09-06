import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '~/components/Spinner'
import useGetHerbDetail from '~/hooks/queries/useGetHerbDetail'
import useModal from '~/hooks/useModal'

const CardDetail = () => {
  const { Modal, open, close, isOpen } = useModal()
  const timeOutId = useRef<number | null>(null)
  const navigate = useNavigate()
  const { pictureId } = useParams()
  const { data, isFetching } = useGetHerbDetail(Number(pictureId))

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
        {isFetching ? (
          <Spinner />
        ) : (
          <div>
            <img src={data?.imgUrl1} />
          </div>
        )}
      </Modal>
    </div>
  )
}
export default CardDetail
