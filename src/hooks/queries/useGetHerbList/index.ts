import { useInfiniteQuery } from '@tanstack/react-query'
import { getHerbList } from '~/api/herbList'
import { HerbList, HerbInfos } from '~/types/herbList'

const useGetHerbList = (pageNo = 1, numOfRows = 10) => {
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery<HerbList>({
      queryKey: ['herb', { pageNo, numOfRows }],
      queryFn: ({ pageParam = pageNo }) =>
        getHerbList({ pageNo: pageParam as number, numOfRows }),
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
