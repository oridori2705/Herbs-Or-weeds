import { useInfiniteQuery } from '@tanstack/react-query'
import { getHerbList } from '~/api/herbList'
import { HerbList, HerbInfos, HerbListPageParams } from '~/types/herbList'

const useGetHerbList = ({
  searchData = '',
  pageNo = 1,
  numOfRows = 10
}: HerbListPageParams) => {
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery<HerbList>({
      queryKey: ['herb', { searchData, pageNo, numOfRows }],
      queryFn: ({ pageParam = pageNo }) =>
        getHerbList({ searchData, pageNo: pageParam as number, numOfRows }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < numOfRows) return undefined

        return allPages.length + 1
      }
    })

  const isHerb = {
    isHerb: true
  }
  const result = data?.pages.flat().map((d: HerbInfos) => ({ ...d, ...isHerb }))
  return {
    herbList: result || [],
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage
  }
}

export default useGetHerbList
