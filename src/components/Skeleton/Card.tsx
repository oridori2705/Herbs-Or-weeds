import styled from '@emotion/styled'
import Base from './Base'

interface Card {
  width: number
  height: number
}

const CardBase = styled(Base)`
  border-radius: 18px;
`

const Card = ({ width, height }: Card) => <CardBase style={{ width, height }} />

export default Card
