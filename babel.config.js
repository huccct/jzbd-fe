let transformRemoveConsolePlugin = [];

if (process.env.NODE_ENV === 'production') {
  transformRemoveConsolePlugin = ['transform-remove-console'];
}
module.exports = {
  presets: [['@babel/preset-env', { modules: false }]],
  sourceType: 'module',
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    ...transformRemoveConsolePlugin
  ]
};
