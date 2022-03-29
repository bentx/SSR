import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchMovieData } from '../redux/action';
import { useParams } from 'react-router-dom';
import ThumbnailCard from '../molecules/ThumbnailCard';
import CustomPagination from '../molecules/CustomPagination';
import { FlexPage } from '../atom/style';
import { Title } from '../atom/fields';

export const Trending = ({ movie, fetchMovieData }) => {
  const { id } = useParams();
  const page = useSelector((state) => state.movieState.isLoaded);

  const params = [];
  params.push(id);

  useEffect(() => {
    fetchMovieData(params);
  }, [id]);

  return (
    <>
      <Title>Trendnig</Title>
      <FlexPage>
        {movie.movieData.results &&
          movie.movieData.results.map((c) => (
            <ThumbnailCard
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </FlexPage>
      <CustomPagination />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    movie: state.movieState,
  };
};

const loadData = (store, param) => {
  return store.dispatch(fetchMovieData(param || 1));
};

export default {
  component: connect(mapStateToProps, {
    fetchMovieData,
  })(Trending),
  loadData,
};
