import React from 'react';
import './app.css';
import Nav from '../organisms/nav';
import Container from '@material-ui/core/Container';
import Header from '../molecules/header';
import { useRoutes } from 'react-router-dom';
import routes from './route';
export const App = ({}) => {
  const element = useRoutes(routes);
  return (
    <>
      <Header />
      <div className='app'>
        <Container>{element}</Container>
      </div>
      <Nav />
    </>
  );
};
