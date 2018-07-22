import React from 'react'
import styled from 'react-emotion'
import Component from '@reactions/component'
import StateTransition from '../index'
import DemoGrid from 'stories/components/DemoGrid'
import stateMap from './components/Tabs/stateMap'
import Panel from './components/Tabs/Panel'
import Tabs from './components/Tabs/index'

const Story = () => (
  <DemoGrid>
    <Component
      initialState={{ current: stateMap[0] }}
      render={({ state, setState }) => (
        <Tabs>
          <Tabs.Links
            currentState={state.current}
            stateMap={stateMap}
            onSelect={tabState => setState({ current: tabState })}
          />
          <Tabs.Content>
            <StateTransition currentState={state.current} stateMap={stateMap}>
              <Panel color={state.current} />
            </StateTransition>
          </Tabs.Content>
        </Tabs>
      )}
    />
  </DemoGrid>
)

export default Story
