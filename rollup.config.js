import resolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
// import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [resolve()]
}
//
// plugins: [
//   resolve(),
//   babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
//   commonjs()
// ],
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
