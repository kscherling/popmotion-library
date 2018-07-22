import React from 'react'
import styled, { css } from 'react-emotion'

const TabLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TabContainer = styled.div`
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

const Tabs = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
`

const TabLink = ({ currentState, state, children, ...rest }) => (
  <TabContainer active={currentState === state} color={state} {...rest}>
    {children}
  </TabContainer>
)

Tabs.Links = ({ currentState, stateMap, onSelect }) => (
  <TabLinksContainer>
    {stateMap.map((state, idx) => (
      <TabLink
        currentState={currentState}
        state={state}
        key={idx}
        onClick={() => onSelect(state)}
      >
        {state}
      </TabLink>
    ))}
  </TabLinksContainer>
)

Tabs.Content = styled.div``

export default Tabs
