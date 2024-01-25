import styled from '@emotion/styled'
import { useState } from 'react'
import CardListItem from '~/components/CardListItem'
import useGetHerbList from '~/hooks/queries/useGetHerbList'
import { HerbInfos } from '~/types/herbList'

const CardListContainer = styled.ul`
  display: grid;
  grid-auto-rows: min-content;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, 200px);
  min-height: 100vh;
  gap: 50px;
`

const CardListPage = () => {
  const [page, setPage] = useState(1)

  const herbList = useGetHerbList({ pageNo: page, numOfRows: 10 })

  if (herbList.isLoading) return <div>로딩중...</div>
  return (
    <>
      <CardListContainer>
        {herbList.data.slice(0, -3).map((herb: HerbInfos) => (
          <CardListItem
            key={herb.elements[1].elements[0].cdata}
            id={herb.elements[1].elements[0].cdata}
            image={herb.elements[4].elements[0].cdata}
            isHerb={herb.isHerb}
            scientificName={herb.elements[0].elements[0].cdata}
            name={herb.elements[2].elements[0].cdata}
            medicineName={herb.elements[3].elements[0].cdata}
          />
        ))}
      </CardListContainer>

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
