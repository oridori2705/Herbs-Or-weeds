import axios from 'axios'
import {
  HerbDetail,
  HerbDetailAPiResponse,
  HerbList,
  HerbListPageParams
} from '~/types/herbList'

export const getHerbList = async ({
  searchData = '',
  pageNo,
  numOfRows
}: HerbListPageParams): Promise<HerbList> => {
  const response = await axios.get('/api/proxy', {
    params: {
      searchData,
      pageNo,
      numOfRows
    }
  })
  return response.data.elements[0].elements[1].elements[0].elements
}

export const getHerbDetail = async ({ cntntsNo }: { cntntsNo: number }) => {
  const response = await axios.get('/api/detail', {
    params: {
      cntntsNo
    }
  })
  const transformData = transformHerbDetail(
    response.data.elements[0].elements[1].elements[0].elements
  )

  return transformData
}

function transformHerbDetail(data: HerbDetailAPiResponse[]): HerbDetail {
  const result: HerbDetail = {
    cntntsNo: '',
    cntntsSj: '',
    bneNm: '',
    hbdcNm: '',
    useeRegn: '',
    stle: '',
    prvateTherpy: '',
    imgUrl1: '',
    imgUrl2: undefined,
    imgUrl3: undefined,
    imgUrl4: undefined,
    imgUrl5: undefined,
    imgUrl6: undefined
  }

  data.forEach(item => {
    if (item.elements && item.elements.length > 0) {
      switch (item.name) {
        case 'cntntsNo':
          result.cntntsNo = item.elements[0].cdata
          break
        case 'cntntsSj':
          result.cntntsSj = item.elements[0].cdata
          break
        case 'bneNm':
          result.bneNm = item.elements[0].cdata
          break
        case 'hbdcNm':
          result.hbdcNm = item.elements[0].cdata
          break
        case 'useeRegn':
          result.useeRegn = item.elements[0].cdata
          break
        case 'stle':
          result.stle = item.elements[0].cdata
          break
        case 'prvateTherpy':
          result.prvateTherpy = item.elements[0].cdata
          break
        case 'imgUrl1':
          result.imgUrl1 = item.elements[0].cdata
          break
        case 'imgUrl2':
          result.imgUrl2 = item.elements[0].cdata
          break
        case 'imgUrl3':
          result.imgUrl3 = item.elements[0].cdata
          break
        case 'imgUrl4':
          result.imgUrl4 = item.elements[0].cdata
          break
        case 'imgUrl5':
          result.imgUrl5 = item.elements[0].cdata
          break
        case 'imgUrl6':
          result.imgUrl6 = item.elements[0].cdata
          break
      }
    }
  })

  return result
}
