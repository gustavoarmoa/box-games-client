import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Jogue a nova temporada <strong>CrashHands</strong></p>',
    buttonLabel: 'Compre agora',
    buttonLink: 'games/defy-death'
  },
  argTypes: {
    ribbonColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    },
    ribbonSize: {
      control: {
        type: 'select',
        options: ['normal', 'small']
      }
    }
  },

  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
