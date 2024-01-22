import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@inobra-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/thalessarubbi.png',
    alt: 'Thales Sarubbi',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
