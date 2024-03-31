import axios from 'axios'
import { HerbList, HerbListPageParams } from '~/types/herbList'

export const getHerbList = async ({
  searchData = '',
  pageNo,
  numOfRows
}: HerbListPageParams): Promise<HerbList> => {
  const response = await axios.get('http://localhost:5000/api', {
    params: {
      searchData,
      pageNo,
      numOfRows
    }
  })
  return response.data.elements[0].elements[1].elements[0].elements
}
