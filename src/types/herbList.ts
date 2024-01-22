export interface HerbListPageParams {
  pageNo: number
  numOfRows: number
}
export type HerbList = HerbInfos[]

export interface HerbInfos {
  type: string
  name: string
  elements: HerbInfoItem[]
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
