import React from 'react'
import { storiesOf } from '@storybook/react'
import TabsStory from './StateTransition/stories/Tabs.js'
import ClockStory from './StateTransition/stories/Clock.js'

storiesOf('StateTransition', module)
  .add('Tab Example', TabsStory)
  .add('Clock Example', ClockStory)
