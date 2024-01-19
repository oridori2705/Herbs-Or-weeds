interface ThemeSwitchProps {
  checked: boolean
  toggleSwitch: () => void
}

const ThemeSwitch = ({ checked, toggleSwitch }: ThemeSwitchProps) => {
  return (
    <div>
      <button onClick={toggleSwitch}>{checked ? 'light' : 'dark'}버튼</button>
    </div>
  )
}

export default ThemeSwitch
