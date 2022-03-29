import Movie from '../pages/movie';
import Search from '../pages/search';
import React from 'react';
import Trending from '../pages/trending';

export default [
  {
    path: '/movie/:id',
    exact: true,
    element: <Movie.component />,
    loadData: (store, path) =>
      Movie.loadData(store, path.split('/').slice(2)[0].split('?')),
  },
  {
    path: '/search/:id',
    element: <Search.component />,
    loadData: (store, path) =>
      Search.loadData(store, path.split('/').slice(2)[0].split('?')),
  },
  {
    path: '/trending/:id',
    element: <Trending.component />,
    loadData: (store, path) =>
      Trending.loadData(store, path.split('/').slice(2)),
  },
];
