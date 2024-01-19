import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import useTheme from './styles/useTheme'
import GlobalStyle from './styles/GlobalStyles'
import { default as THEME } from './styles/Theme'
import ThemeSwitch from './components/ThemeSwitch'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 5,
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
})

function App() {
  const [theme, onToggle] = useTheme()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={THEME[theme]}>
          <Global styles={GlobalStyle(THEME[theme])} />
          <MainContainer>
            <ThemeSwitch
              checked={theme === 'dark'}
              toggleSwitch={onToggle}
            />
            <ProfileContainer>나는 글씨다!</ProfileContainer>
          </MainContainer>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
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
