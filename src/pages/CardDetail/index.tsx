import { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetHerbDetail from '~/hooks/queries/useGetHerbDetail'
import useModal from '~/hooks/useModal'
import DetailSkeleton from './DetailSkeleton'
import {
  Container,
  Description,
  ImageGallery,
  InfoItem,
  InfoSection,
  SectionTitle,
  Title
} from './CardDetail.styled'

const CardDetail = () => {
  const { Modal, open, close, isOpen } = useModal()
  const timeOutId = useRef<number | null>(null)
  const navigate = useNavigate()
  const { pictureId } = useParams()
  const { data, isFetching, isSuccess } = useGetHerbDetail(Number(pictureId))

  const replaceBrTags = (description: string) => {
    const formattedText = description.replace(/<br\s*\/?>/g, '\n')
    return formattedText
  }
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
          <DetailSkeleton />
        ) : isSuccess && data ? (
          <Container>
            <Title>{data.cntntsSj}</Title>
            <ImageGallery>
              {[
                data.imgUrl1,
                data.imgUrl2,
                data.imgUrl3,
                data.imgUrl4,
                data.imgUrl5
              ]
                .filter(Boolean)
                .map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${data.cntntsSj} ${index + 1}`}
                  />
                ))}
            </ImageGallery>

            <InfoSection>
              <SectionTitle>약초 정보</SectionTitle>
              <InfoItem>콘텐츠 번호: {data.cntntsNo}</InfoItem>
              <InfoItem>학명: {data.bneNm}</InfoItem>
              <InfoItem>생약명: {data.hbdcNm}</InfoItem>
              <InfoItem>이용부위: {data.useeRegn}</InfoItem>
              <InfoItem>형태: {replaceBrTags(data.stle)}</InfoItem>
            </InfoSection>

            <InfoSection>
              <SectionTitle>민간요법</SectionTitle>
              <Description>{replaceBrTags(data.prvateTherpy)}</Description>
            </InfoSection>
          </Container>
        ) : (
          <p>데이터를 불러올 수 없습니다.</p>
        )}
      </Modal>
    </div>
  )
}
export default CardDetail
