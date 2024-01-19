import { Meta, StoryObj } from '@storybook/react'

import ThemeSwitch from '~/components/ThemeSwitch'

export default {
  title: 'Common/Components/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {}
} satisfies Meta<typeof ThemeSwitch>

type Story = StoryObj<typeof ThemeSwitch>

export const Default: Story = {}
