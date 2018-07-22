import React from 'react'
import styled, { css } from 'react-emotion'

const Grid = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 1fr auto 1fr;
  background: #f2f2f2;

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `};
`

const Cell = styled.div``

const DemoGrid = ({ children, background }) => (
  <Grid background={background}>
    <Cell />
    <Cell />
    <Cell />
    <Cell />
    <Cell>{children}</Cell>
    <Cell />
    <Cell />
    <Cell />
    <Cell />
  </Grid>
)

export default DemoGrid
