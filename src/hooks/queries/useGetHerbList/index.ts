import { useQuery } from '@tanstack/react-query'
import { getHerbList } from '~/api/herbList'
import { HerbListPageParams } from '~/types/herbList'

const useGetHerbList = ({ pageNo, numOfRows }: HerbListPageParams) => {
  const result = useQuery({
    queryKey: ['herb', { pageNo, numOfRows }],
    queryFn: () => getHerbList({ pageNo, numOfRows })
  })

  return result
}

export default useGetHerbList
