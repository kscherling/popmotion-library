import React, { Component } from 'react'
import posed, { PoseGroup } from 'react-pose'
import PropTypes from 'prop-types'
import defaultPose from './defaultPose'

const isBoundry = (currentStateIdx, prevStateIdx, stateMap) =>
  currentStateIdx === 0 && prevStateIdx === stateMap.length - 1

const isReverse = (currentState, prevState, stateMap, infinite) => {
  const currentStateIdx = stateMap.indexOf(currentState)
  const prevStateIdx = stateMap.indexOf(prevState)

  let boundry = false

  if (infinite) {
    boundry = isBoundry(currentStateIdx, prevStateIdx, stateMap)
  }

  return !boundry && currentStateIdx < prevStateIdx
}

class StateTransition extends Component {
  static propTypes = {
    currentState: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    stateMap: PropTypes.array.isRequired,
    posedProps: PropTypes.shape({
      pre: PropTypes.object,
      enter: PropTypes.object,
      exit: PropTypes.object
    }),
    infinite: PropTypes.bool
  }

  static defaultProps = {
    currentState: null,
    stateMap: null,
    posedProps: defaultPose,
    infinite: false
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
    const { currentState, stateMap, infinite } = props

    return {
      currentState,
      reverse: isReverse(currentState, prevState, stateMap, infinite)
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
