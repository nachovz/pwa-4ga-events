const webpack = require('webpack')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const path = require('path')
const withCSS = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

module.exports = withCSS(
  {
    webpack:(config, {dev}) => {
      const oldEntry = config.entry
      config.entry = () => oldEntry().then(entry => {
        if(entry["main.js"])
          entry['main.js'].push(path.resolve('./utils/offline'))
        return entry
      })
      if(!dev){
        config.plugins.push(new SWPrecacheWebpackPlugin({
          cacheId: 'test-lighthouse',
          filepath: path.resolve('./static/sw.js'),
          staticFileGlobs: [
            'static/**/*'
          ],
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          runtimeCaching: [{
            handler: 'fastest',
            urlPattern: /[.](png|jpg|css)/
          },{
            handler: 'networkFirst',
            urlPattern: /^http.*/
          }]
        }))
      }
      
      
      return config
    }
    
  }
)
/*
const withCSS = require('@zeit/next-css')
module.exports = withCSS()

const withOffline = require('next-offline')
module.exports = withOffline()*/