import React from 'react'
import styled from 'react-emotion'
import { StateTransition } from 'index'
import verticalSlidePose from './verticalSlidePose'
import { timeLeftStateMap, timeRightStateMap } from './stateMaps'

const Clock = styled.div`
  display: flex;
  flex-flow: row;
  font-size: 1.5rem;
`

const Count = styled.div`
  padding: 0.5rem 0.75rem;
  background: #fff;
`

const Counter = styled.div`
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

Clock.Counter = ({
  value,
  leftStateMap = timeLeftStateMap,
  rightStateMap = timeRightStateMap
}) => {
  const [left, right] = value.split('')

  return (
    <Counter>
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
    </Counter>
  )
}

export default Clock
