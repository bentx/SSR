import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchMovieData } from '../redux/action';
import { useParams } from 'react-router-dom';
import ThumbnailCard from '../molecules/ThumbnailCard';
import CustomPagination from '../molecules/CustomPagination';
import { FlexPage } from '../atom/style';
import { Title } from '../atom/fields';

export const Trending = ({ movie, page, fetchMovieData }) => {
  const { id } = useParams();

  const params = [];
  params.push(id);

  useEffect(() => {
    if (Number(id) !== movie.movieData.page || page !== 0) {
      fetchMovieData(params);
    } else {
      console.log('Server Side Rendered');
    }
  }, [id]);

  return (
    <>
      <Title>Trendnig</Title>
      <FlexPage>
        {movie.movieData.results &&
          movie.movieData.results.map((c, key) => (
            <ThumbnailCard
              key={c.id}
              id={key}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              type='trending'
              page={id}
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
    page: state.routeState,
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
