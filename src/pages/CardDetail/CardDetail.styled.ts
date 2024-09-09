import styled from '@emotion/styled'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
`

export const ImageGallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: calc(50% - 10px);
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`

export const InfoSection = styled.div`
  margin-top: 20px;
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

export const InfoItem = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #555;
`

export const SectionTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin-top: 20px;
`

export const Description = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.5;
`
