module.exports = function (api) {
  api.cache(true)

  return {
    compact: false,
    presets: [['@babel/env', { targets: { esmodules: true } }]],
  }
}
