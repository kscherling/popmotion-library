import isBoundry from './isBoundry'

const isReverse = (currentState, prevState, stateMap, infinite) => {
  const currentStateIdx = stateMap.indexOf(currentState)
  const prevStateIdx = stateMap.indexOf(prevState)

  let boundry = false

  if (infinite) {
    boundry = isBoundry(currentStateIdx, prevStateIdx, stateMap)
  }

  return !boundry && currentStateIdx < prevStateIdx
}

export default isReverse
