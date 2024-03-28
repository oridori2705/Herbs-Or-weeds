import { ChangeEvent, FormEvent, useState } from 'react'
import {
  Input,
  RecommendListLi,
  RecommendListTitle,
  RecommendListUl,
  RecommendResultStatus,
  SearchInputContainer,
  SvgContainer
} from './styled'
import useDebounce from '~/hooks/useDebounce'
import { Link, useNavigate } from 'react-router-dom'
import useGetHerbSearchList from '~/hooks/queries/useGetHerbSearchList'
import useModal from '~/hooks/useModal'
import boldSearchQuery from '~/utils/boldSearchQuery'
import Spinner from '../Spinner'

//TODO
// 1. 추천검색어 키보드 이벤트 가능하도록
// 2. 추천검색어 이후 Link가 아닌 button으로 바꿔야 함 -> 추천 검색어 클릭시 모달 close되어야 됨, 키보드 이벤트시 button이벤트로 해야됨
interface RecommendListItem {
  No: number
  name: string
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const { modalRef, isShow, setIsShow } = useModal()
  const navigate = useNavigate()

  const { data, isLoading } = useGetHerbSearchList(searchQuery)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/picture?name=${e.currentTarget.search.value}`)
    setIsShow(false)
  }

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value

    if (query === '') {
      setIsShow(false)
      setSearchQuery(() => query)
      return
    }
    setSearchQuery(() => query)
    setIsShow(true)
  }
  const debouncedOnChange = useDebounce<typeof handleChange>(handleChange, 500)

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
      {isShow && (
        <RecommendListUl ref={modalRef}>
          <RecommendListTitle>추천 검색어</RecommendListTitle>

          {isLoading ? (
            <RecommendResultStatus>
              <Spinner />
            </RecommendResultStatus>
          ) : data.length > 0 ? (
            data.map((data: RecommendListItem) => (
              <RecommendListLi key={data.No}>
                <Link to={`/picture?name=${data.name}`}>
                  {boldSearchQuery(data.name, searchQuery)}
                </Link>
              </RecommendListLi>
            ))
          ) : (
            <RecommendResultStatus>
              <p>없음</p>
            </RecommendResultStatus>
          )}
        </RecommendListUl>
      )}
    </SearchInputContainer>
  )
}
export default SearchBar
