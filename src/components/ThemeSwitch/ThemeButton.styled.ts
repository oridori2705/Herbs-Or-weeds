import styled from '@emotion/styled'

interface ThemeButtonProps {
  checked: boolean
}

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
`

export const ToggleButton = styled.button<ThemeButtonProps>`
  background-color: ${props => (props.checked ? '#f0f0f0' : '#333')};
  color: ${props => (props.checked ? '#333' : '#f0f0f0')};
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${props => (props.checked ? '#e0e0e0' : '#444')};
  }

  &:focus {
    outline: none;
  }
`
