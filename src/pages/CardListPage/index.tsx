import styled from '@emotion/styled'
import CardListItem from '~/components/CardListItem'
import Skeleton from '~/components/Skeleton'
import useGetHerbList from '~/hooks/queries/useGetHerbList'
import useInfiniteScroll from '~/hooks/useInfiniteScroll'
import { HerbInfos } from '~/types/herbList'
import CardSkeleton from './Skeleton'
import { useSearchParams } from 'react-router-dom'

export const CardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: 300px;
  justify-content: center;
  min-height: 100vh;
  gap: 50px;
`

export const SearchResultContainer = styled.div`
  margin-top: 55px;
  padding-top: 10px;
  height: 60px;
`

const CardListPage = () => {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('name')
  const {
    herbList,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  } = useGetHerbList({ searchData: searchQuery })

  const refetch = () => {
    if (hasNextPage && !isFetching) fetchNextPage()
  }
  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch)

  if (isFetching && !isFetchingNextPage) return <CardSkeleton />
  return (
    <>
      <SearchResultContainer>
        {searchQuery && <h2>"{searchQuery}" 검색 결과</h2>}
      </SearchResultContainer>

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
        {isFetching && (
          <Skeleton.Card
            width={200}
            height={300}
          />
        )}
        {!isFetching && !hasNextPage && (
          <div>이제 볼 수 있는 결과가 없어요.</div>
        )}
        <div ref={ref}></div>
      </CardListContainer>
    </>
  )
}
export default CardListPage
