const { injectBabelPlugin } = require('react-app-rewired')

module.exports = (config, env) => {
  config = injectBabelPlugin(
    ['emotion', { autoLabel: true, sourceMap: env === 'development' }],
    config
  )

  return config
}
