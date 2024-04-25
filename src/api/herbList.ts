import axios from 'axios'
import { HerbListPageParams } from '~/types/herbList'

const apiUrl = import.meta.env.VITE_API_BASE_URL

export const getHerbList = async ({
  searchData = '',
  pageNo,
  numOfRows
}: HerbListPageParams) => {
  const response = await axios.get(apiUrl, {
    params: {
      searchData,
      pageNo,
      numOfRows
    }
  })
  return response.data.elements[0].elements[1].elements[0].elements
}
