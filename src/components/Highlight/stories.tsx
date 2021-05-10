import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it is back',
    subtitle: 'Come see Johns new adventures',
    backgroundImage: '/img/red-dead-img.jpeg',
    buttonLabel: 'Buy now',
    buttonLink: '/random'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
