import { useQuery } from '@tanstack/react-query'
import { getHerbDetail } from '~/api/herbList'
const useGetHerbDetail = (query: number) => {
  const result = useQuery({
    queryKey: ['detail', { query }],
    queryFn: () => getHerbDetail({ cntntsNo: query })
  })

  return result
}

export default useGetHerbDetail
