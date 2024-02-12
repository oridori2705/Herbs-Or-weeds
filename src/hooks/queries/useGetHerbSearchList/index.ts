import { useQuery } from '@tanstack/react-query'
import { getHerbList } from '~/api/herbList'
import { HerbInfos } from '~/types/herbList'

const useGetHerbSearchList = (query: string) => {
  const result = useQuery({
    queryKey: ['searchHerb', { query }],
    queryFn: () => getHerbList({ searchData: query }),
    select: data =>
      data
        .filter((data: HerbInfos) => data.name === 'item')
        .map((data: HerbInfos) => {
          return {
            No: Number(data.elements[1].elements[0].cdata),
            name: data.elements[2].elements[0].cdata
          }
        })
  })

  return result
}

export default useGetHerbSearchList
