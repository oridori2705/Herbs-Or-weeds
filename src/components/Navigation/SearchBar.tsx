import { ChangeEvent, FormEvent, useState } from 'react'
import { Input, SvgContainer } from './styled'
import { getSearchData } from '~/api/searchHerb'
import useDebounce from '~/hooks/useDebounce'
import { HerbInfos } from '~/types/herbList'
import styled from '@emotion/styled'

const SearchInputContainer = styled.div`
  position: relative;
`

const RecommendListUl = styled.ul`
  position: absolute;
  top: 40px;
  width: 100%;
  padding: 5px 0 5px 7px;
  display: flex;
  flex-direction: column;
  background-color: gray;
  border-radius: 10px;
`
const RecommendListLi = styled.li`
  display: flex;
  flex-direction: column;
  padding: 4px 0;
`
interface RecommendListItem {
  No: number
  name: string
}

const SearchBar = () => {
  const [recommendList, setRecommendList] = useState([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.trim()
    setSearchQuery(query)

    if (query === '') {
      return
    }

    const result = await getSearchData(query)
    const recommendData = result
      .filter((data: HerbInfos) => data.name === 'item')
      .map((data: HerbInfos) => {
        return {
          No: Number(data.elements[1].elements[0].cdata),
          name: data.elements[2].elements[0].cdata
        }
      })
    setRecommendList(recommendData)
  }
  const debouncedOnChange = useDebounce<typeof handleChange>(handleChange, 500)

  const boldSearchQuery = (text: string, query: string): React.ReactNode => {
    const index = text.toLowerCase().indexOf(query.toLowerCase())

    if (index !== -1) {
      return (
        <div style={{ display: 'flex' }}>
          {text.substring(0, index)}
          <strong style={{ color: 'lightgreen' }}>
            {text.substring(index, index + query.length)}
          </strong>
          {text.substring(index + query.length)}
        </div>
      )
    }

    return text
  }

  return (
    <SearchInputContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          onChange={debouncedOnChange}
          placeholder="약초를 검색해보세요."
        />
        <button type="submit">
          <SvgContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search svelte-1leehxl"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none">
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"></path>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
          </SvgContainer>
        </button>
      </form>
      {recommendList.length > 0 && (
        <RecommendListUl>
          <span>추천 검색어</span>
          {recommendList.map((data: RecommendListItem) => (
            <RecommendListLi key={data.No}>
              {boldSearchQuery(data.name, searchQuery)}
            </RecommendListLi>
          ))}
        </RecommendListUl>
      )}
    </SearchInputContainer>
  )
}
export default SearchBar
