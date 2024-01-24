import { useQuery } from '@tanstack/react-query'
import { getHerbList } from '~/api/herbList'
import { HerbInfos, HerbListPageParams } from '~/types/herbList'

const useGetHerbList = ({ pageNo, numOfRows }: HerbListPageParams) => {
  const result = useQuery({
    queryKey: ['herb', { pageNo, numOfRows }],
    queryFn: () => getHerbList({ pageNo, numOfRows }),
    select: data => {
      const isHerb = {
        isHerb: true
      }
      const superHeroNames = data.map((d: HerbInfos) => ({ ...d, ...isHerb }))
      return superHeroNames
    }
  })

  return result
}

export default useGetHerbList
