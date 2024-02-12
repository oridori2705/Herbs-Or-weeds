import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const spinning = keyframes`
     0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
const Loader = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid;
  /* 투명하게 */
  border-top-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${spinning} 1s infinite linear;
`

const Spinner = () => {
  return <Loader />
}
export default Spinner
