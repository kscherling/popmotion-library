const isBoundry = (currentStateIdx, prevStateIdx, stateMap) =>
  currentStateIdx === 0 && prevStateIdx === stateMap.length - 1

export default isBoundry
