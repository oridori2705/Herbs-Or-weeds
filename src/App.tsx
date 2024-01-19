import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import useTheme from './styles/useTheme'
import GlobalStyle from './styles/GlobalStyles'
import { default as THEME } from './styles/Theme'
import ThemeSwitch from './components/ThemeSwitch'

function App() {
  const [theme, onToggle] = useTheme()

  return (
    <>
      <ThemeProvider theme={THEME[theme]}>
        <Global styles={GlobalStyle(THEME[theme])} />
        <MainContainer>
          <ThemeSwitch
            checked={theme === 'dark'}
            toggleSwitch={onToggle}
          />
          <ProfileContainer>dsadsdadsasda</ProfileContainer>
        </MainContainer>
      </ThemeProvider>
    </>
  )
}

export default App

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 780px;
`
const ProfileContainer = styled.div`
  margin: 1rem;
`
