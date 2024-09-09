import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const pulse = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #e0e0e0;
  }
`

const SkeletonContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

const SkeletonTitle = styled.div`
  height: 24px;
  background-color: #e0e0e0;
  border-radius: 4px;
  width: 60%;
  margin-bottom: 16px;
  animation: ${pulse} 1.5s infinite;
`

const SkeletonImage = styled.div`
  height: 200px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 16px;
  animation: ${pulse} 1.5s infinite;
`

const SkeletonText = styled.div`
  height: 16px;
  background-color: #e0e0e0;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 8px;
  animation: ${pulse} 1.5s infinite;
`

const SkeletonSection = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const DetailSkeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonTitle />
      <SkeletonImage />
      <SkeletonSection>
        <SkeletonText style={{ width: '40%' }} />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
      </SkeletonSection>
      <SkeletonSection>
        <SkeletonText style={{ width: '30%' }} />
        <SkeletonText />
      </SkeletonSection>
    </SkeletonContainer>
  )
}

export default DetailSkeleton
