import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRouteValue } from '../redux/action';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const value = useSelector((state) => state.routeState);
  const id = useSelector((state) => state.movieState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <BottomNavigation value={value} showLabels className={classes.root}>
      <BottomNavigationAction
        style={{ color: 'white' }}
        label='Trending'
        icon={<WhatshotIcon />}
        onClick={() => {
          navigate(`/trending/1`);
        }}
      />

      <BottomNavigationAction
        style={{ color: 'white' }}
        label='Movies'
        icon={<MovieIcon />}
        onClick={() => {
          navigate(`/movie/1?genres=12&rating=5`);
        }}
      />

      <BottomNavigationAction
        style={{ color: 'white' }}
        label='Search'
        icon={<SearchIcon />}
        onClick={() => {
          navigate(`/search/1?search=god`);
        }}
      />
    </BottomNavigation>
  );
}
