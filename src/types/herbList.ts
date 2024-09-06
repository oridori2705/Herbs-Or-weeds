export interface HerbListPageParams {
  searchData?: string | null
  pageNo?: number
  numOfRows?: number
}

export type HerbList = HerbInfos[]

export interface HerbInfos {
  type: string
  name: string
  elements: HerbInfoItem[]
  isHerb: boolean
}

export interface HerbInfoItem {
  type: string
  name: string
  elements: HerbInfoDetail[]
}

export interface HerbInfoDetail {
  type: string
  cdata: string
}

/*
0번째 데이터 : bneNm(학명)
1번째 데이터 : cntntsNo(콘텐츠 번호)
2번째 데이터 : cntntsSj(명칭)
3번째 데이터 : hbdcNm(생약명)
4번째 데이터 : imgUrl(원본 이미지)
5번째 데이터 : thumbImgUrl(썸네일 이미지)
*/
export interface HerbDetailParams {
  cntntsNo: string
}

export interface HerbDetail {
  cntntsNo: string
  cntntsSj: string
  bneNm: string
  hbdcNm: string
  useeRegn: string
  stle: string
  prvateTherpy: string
  imgUrl1: string
  imgUrl2?: string
  imgUrl3?: string
  imgUrl4?: string
  imgUrl5?: string
  imgUrl6?: string
}

export interface HerbDetailCdataElement {
  type: 'cdata'
  cdata: string
}

export interface HerbDetailElement {
  type: 'element'
  name: string
  elements?: HerbDetailCdataElement[]
}

export interface HerbDetailAPiResponse {
  type: 'element'
  name: string
  elements?: HerbDetailCdataElement[]
}
