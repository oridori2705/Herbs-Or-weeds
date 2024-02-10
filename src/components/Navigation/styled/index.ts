import styled from '@emotion/styled'

export const Container = styled.section`
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

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 780px;
  @media (max-width: 360px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
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

export const SvgContainer = styled.div`
  position: absolute;
  right: 0;
  top: -5px;
  transform: translate(-50%, calc(50%));
`
export const SearchBarContainer = styled.div`
  position: relative;
  max-width: 500px;
  padding: 5px;
  border-radius: 0.66em;
  backdrop-filter: blur(5px);
`

export const NavContentDiv = styled.div`
  display: flex;
`

export const NavContent = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  .active {
    border-bottom: 1px solid #fff;
  }
`
