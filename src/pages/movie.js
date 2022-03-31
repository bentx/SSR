import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchMovieData } from '../redux/action';
import StarRating from '../molecules/Rating';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ThumbnailCard from '../molecules/ThumbnailCard';
import CustomPagination from '../molecules/CustomPagination';
import { FlexPage } from '../atom/style';
import { Title } from '../atom/fields';
import Genres from '../molecules/Genres';

export const Movie = ({ moviedate, fetchMovieData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieState = useSelector((state) => state.movieState);
  const [searchparam, setSearchParam] = useSearchParams();
  const params = [];
  const gen = searchparam.get('genres');
  const rate = searchparam.get('rating');

  useEffect(() => {
    params.push(id);
    params.push(gen);
    params.push(rate);
    if (movieState.genres !== gen || movieState.movieData.page !== Number(id) || movieState.movieData.rating !== rate) {
      fetchMovieData(params);
    } else {
      console.log('server side rendered');
    }
  }, [id, gen, rate]);

  return (
    <>
      <Title>Movies</Title>
      <StarRating />
      <Genres genres={moviedate.genresData} />
      <FlexPage>
        {moviedate.movieData.results &&
          moviedate.movieData.results.map((c, key) => (
            <ThumbnailCard
              key={c.id}
              id={key}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              type='movie'
              genres={gen}
              rate={rate}
              page={id}
            />
          ))}
      </FlexPage>
      <CustomPagination />
    </>
  );
};

const loadData = (store, param) => {
  const query = param[1].split('&').map((e) => e.split('=')[1]);
  param.pop();
  param.push(query[0]);
  param.push(query[1] || '5');
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
  })(Movie),
  loadData,
};
