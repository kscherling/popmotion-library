import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'
import defaultPose from './defaultPose'

class StateTransition extends Component {
  static defaultProps = {
    currentState: null,
    stateMap: [],
    posedProps: defaultPose
  }

  constructor(props) {
    super(props)
    const { currentState } = props

    this.state = {
      currentState,
      reverse: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { currentState: prevState } = state
    const { currentState, stateMap } = props

    return {
      currentState,
      reverse: stateMap.indexOf(currentState) < stateMap.indexOf(prevState)
    }
  }

  render() {
    const { children, posedProps, currentState } = this.props
    const { reverse } = this.state

    const Posed = posed.div(posedProps)

    return (
      <PoseGroup
        preEnterPose={reverse ? 'exit' : 'pre'}
        enterPose="enter"
        exitPose={reverse ? 'pre' : 'exit'}
      >
        <Posed key={currentState}>{children}</Posed>
      </PoseGroup>
    )
  }
}

export default StateTransition
