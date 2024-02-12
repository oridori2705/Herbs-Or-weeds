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
