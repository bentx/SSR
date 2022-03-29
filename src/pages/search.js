import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchMovieData } from '../redux/action';
import { lightTheme } from '../atom/style/MaterialUI';
import { useParams, useSearchParams } from 'react-router-dom';
import ThumbnailCard from '../molecules/ThumbnailCard';
import CustomPagination from '../molecules/CustomPagination';
import { FlexPage } from '../atom/style';
import { ThemeProvider } from '@material-ui/core';
import SearchArea from '../molecules/SearchArea';

export const Search = ({ moviedate, fetchMovieData }) => {
  const { id } = useParams();
  const [searchparam, setSearchParam] = useSearchParams();
  const params = [];
  const search = searchparam.get('search');

  useEffect(() => {
    params.push(id);
    params.push(search);
    fetchMovieData(params);
  }, []);

  return (
    <div>
      <ThemeProvider theme={lightTheme}>
        <SearchArea />
        <FlexPage>
          {moviedate.movieData.results &&
            moviedate.movieData.results.map((c) => (
              <ThumbnailCard
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.first_air_date || c.release_date}
                media_type='movie'
                vote_average={c.vote_average}
              />
            ))}
        </FlexPage>
      </ThemeProvider>
    </div>
  );
};

const loadData = (store, param) => {
  const query = param[1].split('=')[1] || 'god';
  param.pop();
  param.push(query);
  return store.dispatch(fetchMovieData(param));
};

const mapStateToProps = (state) => {
  return {
    moviedate: state.movieState,
  };
};

export default {
  component: connect(mapStateToProps, {
    fetchMovieData,
  })(Search),
  loadData,
};
