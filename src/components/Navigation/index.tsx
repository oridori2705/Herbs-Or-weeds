import { NavLink } from 'react-router-dom'
import {
  Container,
  NavContainer,
  NavContent,
  NavContentDiv,
  SearchBarContainer
} from './styled'
import SearchBar from './SearchBar'

const Navigation = () => {
  return (
    <Container>
      <NavContainer>
        <SearchBarContainer>
          <SearchBar />
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
