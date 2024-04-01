import { Global, ThemeProvider } from '@emotion/react'
import useModal from '~/hooks/useModal'
import GlobalStyle from '~/styles/GlobalStyles'
import { default as THEME } from '~/styles/Theme'

export default {
  title: 'Common/Components/useModal'
}

export const Default = {
  render: function Render() {
    const { Modal, open, close, isOpen, isAnimating } = useModal()

    return (
      <div>
        <ThemeProvider theme={THEME['dark']}>
          <Global styles={GlobalStyle(THEME['dark'])} />
          <button
            onClick={open}
            style={{
              backgroundColor: 'lightblue',
              padding: '5px',
              borderRadius: '5px'
            }}>
            Modal 오픈
          </button>
          <Modal
            isOpen={isOpen}
            close={close}
            isAnimating={isAnimating}>
            <div>안녕하세요</div>
            <div>하이하이복실</div>
          </Modal>
        </ThemeProvider>
      </div>
    )
  }
}
