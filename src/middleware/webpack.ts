import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import errorOverlay from 'react-dev-utils/errorOverlayMiddleware';
import openBrewser from 'react-dev-utils/openBrowser';
import config from '../config';
import webpackConfig from '../../webpack.config.client.js';

export default function middleware() {
  openBrewser(`http://localhost:${config.port}`);
  const compiler = webpack(webpackConfig)
  return [
    webpackHotMiddleware(compiler, {log: console.log, path: '/__webpack_hmr', heartbeat: 200}),
    webpackDevMiddleware(compiler, { serverSideRender: true, writeToDisk: true}),
    errorOverlay()
  ]
}