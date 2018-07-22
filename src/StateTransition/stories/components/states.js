import React from 'react'
import styled from 'react-emotion'

const StyledPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  background: #ffffff;
  border-radius: 6px;
  font-size: 1.5rem;
  color: ${({ color }) => color};

  > label {
    margin-bottom: 0;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    color: #fff;
    background: ${({ color }) => color};
  }
`

const Panel = ({ color }) => (
  <StyledPanel color={color}>
    <label>{color}</label>
  </StyledPanel>
)

const states = {
  red: <Panel color="red" />,
  orange: <Panel color="orange" />,
  yellow: <Panel color="yellow" />,
  green: <Panel color="green" />,
  blue: <Panel color="blue" />
}

export default states
