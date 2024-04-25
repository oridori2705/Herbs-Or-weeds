import axios from 'axios'
import { HerbListPageParams } from '~/types/herbList'

export const getHerbList = async ({
  searchData = '',
  pageNo,
  numOfRows
}: HerbListPageParams) => {
  const response = await axios.get('/api/proxy', {
    params: {
      searchData,
      pageNo,
      numOfRows
    }
  })
  return response.data.elements[0].elements[1].elements[0].elements
}
