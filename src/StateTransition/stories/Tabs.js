import React from 'react'
import styled from 'react-emotion'
import Component from '@reactions/component'
import StateTransition from '../index'
import DemoGrid from 'stories/components/DemoGrid'
import stateMap from './components/stateMap'
import states from './components/states'
import Tabs from './components/Tabs'
import TabGroup from './components/Tabs'

const firstKey = states => Object.keys(states)[0]

const Story = () => (
  <DemoGrid>
    <Component
      initialState={{ current: firstKey(states) }}
      render={({ state, setState }) => (
        <TabGroup>
          <TabGroup.Tabs
            currentState={state.current}
            stateMap={stateMap}
            onSelect={tabState => setState({ current: tabState })}
          />
          <TabGroup.Content>
            <StateTransition currentState={state.current} stateMap={stateMap}>
              {states[state.current]}
            </StateTransition>
          </TabGroup.Content>
        </TabGroup>
      )}
    />
  </DemoGrid>
)

export default Story
