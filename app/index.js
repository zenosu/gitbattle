var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey= 'b55f60b40a704c2aae09ecda3e254c28';
var sentryApp= '105704';
var sentryURL= 'https://' + sentryKey +'@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'zeno',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  } 
}).install();

ReactDOM.render(
  routes,
  document.getElementById('app')
);
