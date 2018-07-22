import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
    commonjs()
  ]
}

// external: [
//   'emotion',
//   'emotion-theming',
//   'polished',

//   'prop-types',
//   'react',
//   'react-dom',
//   'react-emotion',
//   'react-redux',
//   'react-router-dom'
// ]
