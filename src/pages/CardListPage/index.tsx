import CardListItem from '~/components/CardListItem'
import Skeleton from '~/components/Skeleton'
import useGetHerbList from '~/hooks/queries/useGetHerbList'
import useInfiniteScroll from '~/hooks/useInfiniteScroll'
import { HerbInfos } from '~/types/herbList'
import CardSkeleton from './Skeleton'
import { Outlet, useSearchParams } from 'react-router-dom'
import LinkCardListItem from '~/components/LinkCardListItem'
import {
  CardListContainer,
  MessageContainer,
  SearchResultContainer
} from './CardListPage.styled'

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
        {searchQuery && <h2>&quot;{searchQuery}&quot; 검색 결과</h2>}
      </SearchResultContainer>
      <CardListContainer>
        {isFetching && !isFetchingNextPage ? (
          <Skeleton.Card
            width={200}
            height={300}
          />
        ) : (
          <>
            {herbList
              .filter(data => data.name === 'item')
              .map((herb: HerbInfos) => (
                <LinkCardListItem
                  key={herb.elements[1].elements[0].cdata}
                  id={herb.elements[1].elements[0].cdata}>
                  <CardListItem
                    size={200}
                    id={herb.elements[1].elements[0].cdata}
                    image={herb.elements[4].elements[0].cdata}
                    isHerb={herb.isHerb}
                    scientificName={herb.elements[0].elements[0].cdata}
                    name={herb.elements[2].elements[0].cdata}
                    medicineName={herb.elements[3].elements[0].cdata}
                  />
                </LinkCardListItem>
              ))}
            {isFetching && (
              <Skeleton.Card
                width={200}
                height={300}
              />
            )}
            {!hasNextPage && !isFetching && herbList.length === 0 ? (
              <MessageContainer>아무것도 없네요!</MessageContainer>
            ) : (
              !hasNextPage &&
              !isFetching && (
                <MessageContainer>
                  이제 볼 수 있는 결과가 없어요.
                </MessageContainer>
              )
            )}
          </>
        )}
        <div ref={ref}></div>
      </CardListContainer>
      <Outlet />
    </>
  )
}
export default CardListPage
