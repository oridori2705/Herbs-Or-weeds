import styled from '@emotion/styled'
import CardListItem from '~/components/CardListItem'
import Skeleton from '~/components/Skeleton'
import useGetHerbList from '~/hooks/queries/useGetHerbList'
import useInfiniteScroll from '~/hooks/useInfiniteScroll'
import { HerbInfos } from '~/types/herbList'
import CardSkeleton from './Skeleton'

export const CardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  min-height: 100vh;
  gap: 50px;
`

const CardListPage = () => {
  const {
    herbList,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useGetHerbList()

  const refetch = () => {
    if (hasNextPage) fetchNextPage()
  }
  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch)

  if (isFetching && !isFetchingNextPage) return <CardSkeleton />
  return (
    <CardListContainer>
      {herbList
        .filter(data => data.name === 'item')
        .map((herb: HerbInfos) => (
          <CardListItem
            key={herb.elements[1].elements[0].cdata}
            id={herb.elements[1].elements[0].cdata}
            image={herb.elements[4].elements[0].cdata}
            isHerb={herb.isHerb}
            scientificName={herb.elements[0].elements[0].cdata}
            name={herb.elements[2].elements[0].cdata}
            medicineName={herb.elements[3].elements[0].cdata}
          />
        ))}
      <Skeleton.Card
        width={200}
        height={300}
      />
      <div ref={ref}></div>
    </CardListContainer>
  )
}
export default CardListPage
