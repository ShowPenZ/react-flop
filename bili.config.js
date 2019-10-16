module.exports = {
  babel: {
    // asyncToPromises: true,
    // babelrc: false,
    // configFile: false,
    jsx: 'react',
    // minimal: false,
    // objectAssign: 'myAssign',
  },
  banner: false,
  bundleNodeModules: true,
  // env: { NODE_ENV: 'develope' },
  // extendConfig: () => {},
  // extendRollupConfig: () => {},
  // externals: [],
  globals: {
    react: 'React',
  },
  input: 'src/Flop.jsx',
  output: {
    dir: 'dist',
    extractCSS: false,
    // fileName: '[name][suffix].js',
    format: ['cjs-min', 'es-min', 'umd-min'],
    minify: true,
    moduleName: 'Flop',
    sourceMap: true,
    sourceMapExcludeSources: true,
    target: 'browser',
  },
  // plugins: {},
  // resolvePlugins: {},
};
