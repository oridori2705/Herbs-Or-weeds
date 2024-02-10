import axios from 'axios'

export const getSearchData = async (searchData: string) => {
  const response = await axios.get('http://localhost:5000/api/search', {
    params: {
      sText: searchData
    }
  })
  return response.data.elements[0].elements[1].elements[0].elements
}
