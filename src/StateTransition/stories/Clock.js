import React from 'react'
import DemoGrid from 'stories/components/DemoGrid'
import Ticker from './components/Clock/Ticker'
import Clock from './components/Clock/index'
import {
  meridianLeftStateMap,
  meridianRightStateMap
} from './components/Clock/stateMaps'

const Story = () => (
  <DemoGrid>
    <Ticker
      render={({ hours, minutes, seconds, meridian }) => (
        <Clock>
          <Clock.Counter value={hours} />
          <Clock.Counter value={minutes} />
          <Clock.Counter value={seconds} />
          <Clock.Counter
            leftStateMap={meridianLeftStateMap}
            rightStateMap={meridianRightStateMap}
            value={meridian}
          />
        </Clock>
      )}
    />
  </DemoGrid>
)

export default Story
