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
    ]
  ]
};
