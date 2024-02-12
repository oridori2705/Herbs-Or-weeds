import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import {
  Input,
  RecommendListLi,
  RecommendListUl,
  SearchInputContainer,
  SvgContainer
} from './styled'
import useDebounce from '~/hooks/useDebounce'
import { Link, useNavigate } from 'react-router-dom'
import useGetHerbSearchList from '~/hooks/queries/useGetHerbSearchList'

//TODO
// 1. 추천검색어 키보드 이벤트 가능하도록

interface RecommendListItem {
  No: number
  name: string
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const modalRef = useRef<HTMLUListElement | null>(null)
  const [isShow, setIsShow] = useState(false)
  const navigate = useNavigate()

  const { data, isLoading } = useGetHerbSearchList(searchQuery)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/picture?name=${e.currentTarget.search.value}`)
    setIsShow(false)
  }

  const handleOutsideClick = (e: MouseEvent) => {
    const isOutsideClick =
      modalRef.current &&
      e.target instanceof Element &&
      !modalRef.current.contains(e.target)

    if (isOutsideClick) {
      setIsShow(false)
    }
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

  useEffect(() => {
    if (isShow) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isShow])

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
          <span>추천 검색어</span>

          {isLoading ? (
            <p>로딩중</p>
          ) : (
            data.map((data: RecommendListItem) => (
              <RecommendListLi key={data.No}>
                <Link to={`/picture?name=${data.name}`}>
                  {boldSearchQuery(data.name, searchQuery)}
                </Link>
              </RecommendListLi>
            ))
          )}
        </RecommendListUl>
      )}
    </SearchInputContainer>
  )
}
export default SearchBar
