import axios from 'axios'
import { HerbListPageParams } from '~/types/herbList'

export const getHerbList = async ({
  pageNo,
  numOfRows
}: HerbListPageParams) => {
  const response = await axios.get('http://localhost:5000/api', {
    params: {
      pageNo,
      numOfRows
    }
  })
  return response.data.elements[0].elements[1].elements[0].elements
}
