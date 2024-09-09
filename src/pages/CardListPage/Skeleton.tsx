import Skeleton from '~/components/Skeleton'
import { CardListContainer, SearchResultContainer } from './CardListPage.styled'

const CardSkeleton = () => {
  return (
    <>
      <SearchResultContainer />
      <CardListContainer>
        <Skeleton.Card
          width={200}
          height={300}
        />
        <Skeleton.Card
          width={200}
          height={300}
        />
        <Skeleton.Card
          width={200}
          height={300}
        />
        <Skeleton.Card
          width={200}
          height={300}
        />
        <Skeleton.Card
          width={200}
          height={300}
        />
        <Skeleton.Card
          width={200}
          height={300}
        />
        <Skeleton.Card
          width={200}
          height={300}
        />
        <Skeleton.Card
          width={200}
          height={300}
        />
        <Skeleton.Card
          width={200}
          height={300}
        />
      </CardListContainer>
    </>
  )
}

export default CardSkeleton
