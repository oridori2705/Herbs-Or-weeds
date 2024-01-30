import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Container = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 10px;
  left: 0;
  width: 100%;

  z-index: 999;
  @media (max-width: 360px) {
    max-width: 360px;
  }
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 780px;
  @media (max-width: 360px) {
    flex-direction: column;
  }
`

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5em;
  padding: 0.5em 2em 0.5em 0.75em;
  margin: 0;
  background: hsla(220, 7%, 17%, 0.66);
  color: #fff;
  outline: none;
  transition: all 0.5s ease;
  box-shadow:
    0 5px 20px #2f3237bf,
    0 5px 10px #2f3237bf;
  width: 100%;
`

const SvgContainer = styled.div`
  position: absolute;
  right: 0;
  top: -5px;
  transform: translate(-50%, calc(50%));
`
const SearchBarContainer = styled.div`
  position: relative;
  max-width: 500px;
  padding: 5px;
  border-radius: 0.66em;
  backdrop-filter: blur(5px);
`

const NavContentDiv = styled.div`
  display: flex;
`

const NavContent = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  .active {
    border-bottom: 1px solid #fff;
  }
`

const Navigation = () => {
  return (
    <Container>
      <NavContainer>
        <SearchBarContainer>
          <Input placeholder="약초를 검색해보세요." />
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
        </SearchBarContainer>
        <NavContentDiv>
          <NavContent>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              홈
            </NavLink>
          </NavContent>
          <NavContent>
            <NavLink
              to="/picture"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              도감
            </NavLink>
          </NavContent>
          <NavContent>
            <NavLink
              to="/game"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              약초꾼의 길
            </NavLink>
          </NavContent>
        </NavContentDiv>
      </NavContainer>
    </Container>
  )
}

export default Navigation
