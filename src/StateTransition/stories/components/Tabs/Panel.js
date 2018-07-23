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
  font-size: 2rem;
  color: ${({ color }) => color};

  > label {
    margin-bottom: 0;
    color: ${({ color }) => color};
  }
`

const Panel = ({ color }) => (
  <StyledPanel color={color}>
    <label>{color}</label>
  </StyledPanel>
)

export default Panel
