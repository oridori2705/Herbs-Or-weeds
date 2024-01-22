import { useState } from 'react'
import useGetHerbList from '~/hooks/queries/useGetHerbList'
import { HerbInfos } from '~/types/herbList'

const CardListPage = () => {
  const [page, setPage] = useState(1)

  const herbList = useGetHerbList({ pageNo: page, numOfRows: 10 })

  if (herbList.isLoading) return <div>로딩중...</div>
  return (
    <>
      <ul>
        {herbList.data.slice(0, -3).map((herb: HerbInfos) => (
          <li key={herb.elements[1].elements[0].cdata}>
            {herb.elements[2].elements[0].cdata}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setPage(prev => prev + 1)
        }}>
        다음페이지로
      </button>
    </>
  )
}
export default CardListPage
