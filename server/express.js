const express = require('express');
const path = require('path');
const ReactDomServer = require('react-dom/server');
import createStore from '../src/redux/store';
import { matchRoutes } from 'react-router-dom';
import { render } from 'express/lib/response';
import renderer from './renderer';
import appRoutes from '../src/Routeres/route';

const app = express();
app.get(
  /\.(js|css|map|ico)$/,
  express.static(path.resolve(__dirname, '../dist'))
);

app.use('*', (req, res) => {
  const context = {};
  const store = createStore();
  const routes = matchRoutes(appRoutes, req.originalUrl);
  console.log(routes);
  if (routes != null) {
    routes[0].route
      .loadData(store, req.originalUrl)
      .then(() => {
        const html = renderer(req, store, context);
        res.contentType('text.html');
        res.status(200);
        res.send(html);
      })
      .catch((error) => {
        res.status(500).send('An error occurred');
      });
  }
});

app.listen('9000', () => {
  console.log('app started on port 9000');
});
