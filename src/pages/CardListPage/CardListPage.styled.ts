import styled from '@emotion/styled'

export const CardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: 300px;
  justify-content: center;

  gap: 50px;
`

export const SearchResultContainer = styled.div`
  margin-top: 55px;
  padding-top: 10px;
  height: 60px;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #8a8a8a;
  font-size: 18px;
  text-align: center;
  background-color: #303030;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`
