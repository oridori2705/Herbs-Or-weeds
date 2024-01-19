interface ThemeSwitchProps {
  checked: boolean
  toggleSwitch: () => void
}

const ThemeSwitch = ({ checked, toggleSwitch }: ThemeSwitchProps) => {
  return (
    <div>
      {checked}
      <button onClick={toggleSwitch}>버튼</button>
    </div>
  )
}

export default ThemeSwitch
