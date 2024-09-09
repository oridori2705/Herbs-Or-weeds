import { ButtonContainer, ToggleButton } from './ThemeButton.styled'

interface ThemeSwitchProps {
  checked: boolean
  toggleSwitch: () => void
}

const ThemeSwitch = ({ checked, toggleSwitch }: ThemeSwitchProps) => {
  return (
    <ButtonContainer>
      <ToggleButton
        checked={checked}
        onClick={toggleSwitch}>
        {checked ? 'Light 모드' : 'Dark 모드'}
      </ToggleButton>
    </ButtonContainer>
  )
}

export default ThemeSwitch
