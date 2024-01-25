import { Global } from '@emotion/react'
import { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { default as THEME } from '~/styles/Theme'
import CardListItem from '~/components/CardListItem'
import GlobalStyle from '~/styles/GlobalStyles'
import styled from '@emotion/styled'

const queryClient = new QueryClient()

export default {
  title: 'Common/Components/CardListItem',
  component: CardListItem,
  argTypes: {},
  decorators: Story => (
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyle(THEME['dark'])} />
      <MainContainer>
        <Story />
      </MainContainer>
    </QueryClientProvider>
  )
} satisfies Meta<typeof CardListItem>

type Story = StoryObj<typeof CardListItem>

export const Default: Story = {
  render: function Render() {
    return (
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: '200px',
          gridAutoRows: 'min-content',
          minHeight: '100vh'
        }}>
        <CardListItem
          id="205054"
          image="http://www.nongsaro.go.kr/cms_contents/1124/205054_MF_REPR_ATTACH_01.jpg"
          isHerb={true}
          medicineName="枾霜(시상)"
          scientificName="Diospyros kaki (감나무과) "
          name="감나무"
        />
      </ul>
    )
  }
}

const MainContainer = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  max-width: 780px;
`
