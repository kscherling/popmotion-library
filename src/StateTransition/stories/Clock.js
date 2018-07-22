import React from 'react'
import styled from 'react-emotion'
import DemoGrid from 'stories/components/DemoGrid'
import Clock from './components/Clock'

const Story = () => (
  <DemoGrid>
    <Clock
      render={({ hours, minutes, seconds }) => (
        <div>{`${hours}:${minutes}:${seconds}`}</div>
      )}
    />
  </DemoGrid>
)

export default Story
