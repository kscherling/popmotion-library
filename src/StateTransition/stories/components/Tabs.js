import React from 'react'
import styled, { css } from 'react-emotion'

const StyledTabs = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledTab = styled.div`
  color: ${({ color }) => color};
  padding: 0.5rem 1rem;
  border-radius: 3px;
  transition: background 0.15s linear, box-shadow 0.15s linear;

  &:hover {
    cursor: pointer;
    background: #f9f9f9;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  }

  ${({ active, color }) =>
    active &&
    css`
      &,
      &:hover {
        background: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }
    `};
`

const TabGroup = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
`

const Tab = ({ currentState, state, children, ...rest }) => (
  <StyledTab active={currentState === state} color={state} {...rest}>
    {children}
  </StyledTab>
)

TabGroup.Tabs = ({ currentState, stateMap, onSelect }) => (
  <StyledTabs>
    {stateMap.map((state, idx) => (
      <Tab
        currentState={currentState}
        state={state}
        key={idx}
        onClick={() => onSelect(state)}
      >
        {state}
      </Tab>
    ))}
  </StyledTabs>
)

TabGroup.Content = styled.div``

export default TabGroup
