import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@inobra-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento Box </Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
