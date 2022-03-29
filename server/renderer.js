import React from 'react';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';

const fs = require('fs');
const path = require('path');
const ReactDomServer = require('react-dom/server');
const { App } = require('../src/Routeres/app');

export default (req, store, context) => {
  const sheet = new ServerStyleSheet();
  const sheets = new ServerStyleSheets();

  let indexHTML = fs.readFileSync(
    path.resolve(__dirname, '../dist/index.html'),
    {
      encoding: 'utf8',
    }
  );
  const appHTML = ReactDomServer.renderToString(
    sheet.collectStyles(
      sheets.collect(
        <Provider store={store}>
          {' '}
          <StaticRouter loacation={req.originalUrl} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      )
    )
  );
  const css = sheets.toString();
  const styles = sheet.getStyleTags();

  indexHTML = indexHTML.replace(
    '<title>Document</title>',
    `<title>Document</title>
    <style id="jss-server-side">${css}</style>
    ${styles}`
  );

  indexHTML = indexHTML.replace(
    '<div id="app"></div>',
    `<div id="app">${appHTML}</div>`
  );

  indexHTML = indexHTML.replace(
    '<script id="initState"></script>',
    `<script id="initState">window.__PRELOADED_STATE__=${serialize(
      store.getState()
    )}</script>`
  );
  return indexHTML;
};
