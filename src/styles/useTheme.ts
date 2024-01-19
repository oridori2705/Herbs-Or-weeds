import { useCallback, useEffect, useState } from 'react'

const useTheme = (): [typeof theme, typeof toggleTheme] => {
  const getInitialTheme = useCallback(() => {
    let theme = window.localStorage.getItem('app_theme') as
      | 'light'
      | 'dark'
      | null
    const INVALID_THEME = theme !== 'light' && theme !== 'dark'

    if (!theme || INVALID_THEME) {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
      theme = matches ? 'dark' : 'light'
    }

    return theme
  }, [])

  const [theme, setTheme] = useState(getInitialTheme)

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('app_theme', theme)
  }, [theme])

  return [theme, toggleTheme]
}

export default useTheme

/*만약 dark 테마일 때 다른 색상으로 커스텀 하고 싶다면
const Profile: React.FC = () => {
  const theme = useTheme(); <- theme값 갖고와서

  return (
    <div css={ProfileBlock}>
      <div css={IntroduceContainer(theme)}>
          ...
      </div>
    </div>
  );
};

export default Profile;

const ProfileBlock = css`
  display: flex;
`;

const IntroduceContainer = (theme: Theme) => css` <- 여기서 커스텀
  display: flex;
  flex-direction: column;
  color: ${theme.fontColor};
`;

*/
