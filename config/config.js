'use strict';
const path = require('path');
const baseDir = process.cwd();

exports.config = {
  baseDir,
  port:9000,
  buildPath: 'public',
  publicPath: '/public/',
  hashLength: 8,
  alias: {},
  packs: {},
  cdn: {},
  install:{
    check: false
  },
  loaders: {},
  plugins: {}
};

exports.devConfig = {
  hot: true,
  hash: false,
  miniJs: false,
  miniCss: false,
  miniImage: false,
  cssExtract: false
};

exports.testConfig = {
  hot: false,
  hash: true,
  miniJs: false,
  miniCss: false,
  miniImage: false,
  cssExtract: true
};

exports.prodConfig = {
  hot: false,
  hash: true,
  miniJs: true,
  miniCss: true,
  miniImage: true,
  cssExtract: true,
  loaders: {
    css: {
      options: {
        minimize: true
      }
    }
  }
};

exports.dllConfig = {
  miniImage: false,
  cssExtract: false,
  loaders: {
    eslint: false,
    scss: false,
    sass: false,
    less: false,
    stylus: false
  },
  plugins: {
    html: false,
    runtime: false,
    commonsChunk: false,
    imagemini: false,
    manifest: false,
    manifestDll: true
  }
};