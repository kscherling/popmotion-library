import React from 'react'
import styled from 'react-emotion'
import DemoGrid from 'stories/components/DemoGrid'
import StateTransition from '../index'
import Ticker from './components/Clock/Ticker'
import verticalSlidePose from './components/Clock/verticalSlidePose'

const timeRightStateMap = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const timeLeftStateMap = ['0', '1', '2', '3', '4', '5']
const meridianLeftStateMap = ['A', 'P']
const meridianRightStateMap = ['M']

const Clock = styled.div`
  display: flex;
  flex-flow: row;
  font-size: 1.5rem;
`

const Count = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem 0.75rem;
  background: #fff;
`

const StyledClockGroup = styled.div`
  display: flex;
  flex-flow: row;

  & + & {
    margin-left: 0.5rem;
  }

  > div:first-child ${Count} {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  > div:last-child ${Count} {
    margin-left: 1px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

const ClockGroup = ({
  value,
  leftStateMap = timeLeftStateMap,
  rightStateMap = timeRightStateMap
}) => {
  const [left, right] = value.split('')

  return (
    <StyledClockGroup>
      {left && (
        <StateTransition
          infinite
          currentState={left}
          stateMap={leftStateMap}
          posedProps={verticalSlidePose}
        >
          <Count>{left}</Count>
        </StateTransition>
      )}
      {right && (
        <StateTransition
          infinite
          currentState={right}
          stateMap={rightStateMap}
          posedProps={verticalSlidePose}
        >
          <Count>{right}</Count>
        </StateTransition>
      )}
    </StyledClockGroup>
  )
}

const Story = () => (
  <DemoGrid>
    <Ticker
      render={({ hours, minutes, seconds, meridian }) => (
        <Clock>
          <ClockGroup value={hours} />
          <ClockGroup value={minutes} />
          <ClockGroup value={seconds} />
          <ClockGroup
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
