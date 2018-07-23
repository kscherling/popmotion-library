'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var posed = require('react-pose');
var posed__default = _interopDefault(posed);
var PropTypes = _interopDefault(require('prop-types'));

const defaultPose = {
  pre: {
    x: '35%',
    opacity: 0
  },
  enter: {
    x: '0%',
    opacity: 1
  },
  exit: {
    x: '-35%',
    opacity: 0
  }
};

const isBoundry = (currentStateIdx, prevStateIdx, stateMap) => currentStateIdx === 0 && prevStateIdx === stateMap.length - 1;

const isReverse = (currentState, prevState, stateMap, infinite) => {
  const currentStateIdx = stateMap.indexOf(currentState);
  const prevStateIdx = stateMap.indexOf(prevState);

  let boundry = false;

  if (infinite) {
    boundry = isBoundry(currentStateIdx, prevStateIdx, stateMap);
  }

  return !boundry && currentStateIdx < prevStateIdx;
};

class StateTransition extends React.Component {

  constructor(props) {
    super(props);
    const { currentState } = props;

    this.state = {
      currentState,
      reverse: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { currentState: prevState } = state;
    const { currentState, stateMap, infinite } = props;

    return {
      currentState,
      reverse: isReverse(currentState, prevState, stateMap, infinite)
    };
  }

  render() {
    const { children, posedProps, currentState } = this.props;
    const { reverse } = this.state;

    const Posed = posed__default.div(posedProps);

    return React__default.createElement(
      posed.PoseGroup,
      {
        preEnterPose: reverse ? 'exit' : 'pre',
        enterPose: 'enter',
        exitPose: reverse ? 'pre' : 'exit'
      },
      React__default.createElement(
        Posed,
        { key: currentState },
        children
      )
    );
  }
}

StateTransition.propTypes = {
  currentState: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
  stateMap: PropTypes.array.isRequired,
  posedProps: PropTypes.shape({
    pre: PropTypes.object,
    enter: PropTypes.object,
    exit: PropTypes.object
  }),
  infinite: PropTypes.bool
};
StateTransition.defaultProps = {
  currentState: null,
  stateMap: null,
  posedProps: defaultPose,
  infinite: false
};

exports.StateTransition = StateTransition;
