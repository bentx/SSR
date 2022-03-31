import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import About from '../molecules/About';
import { img_500, unavailable } from '../atom/config/config';
import { fetchMovieData } from '../redux/action';
import { PortrateModel, LandscapeModel } from '../atom/images';
import { AboutModel, Content } from '../atom/style';

const Details = ({ movie, fetchMovieData }) => {
  const [searchparam, setSearchParam] = useSearchParams();
  const params = [];
  const { id } = useParams();
  const rate = searchparam.get('rating');
  const genres = searchparam.get('genres');
  const type = searchparam.get('type');
  const index = searchparam.get('id');
  const search = searchparam.get('search');

  const param = [];
  useEffect(() => {
    if (type === 'trending') {
      param.push(id);
      fetchMovieData(param || 1);
    } else if (type === 'search') {
      param.push(id);
      param.push(search);
      fetchMovieData(param);
    } else {
      param.push(id);
      param.push(`[${genres}]`);
      param.push(rate);
      fetchMovieData(param);
    }
  }, [id]);
  console.log(movie);
  return (
    <Content>
      <PortrateModel
        alt={movie.movieData.results[index].name || movie.movieData.results[index].title}
        src={
          movie.movieData.results[index].poster_path
            ? `${img_500}/${movie.movieData.results[index].poster_path}`
            : unavailable
        }
      />
      <LandscapeModel
        alt={movie.movieData.results[index].name || movie.movieData.results[index].title}
        src={
          movie.movieData.results[index].poster_path
            ? `${img_500}/${movie.movieData.results[index].backdrop_path}`
            : unavailable
        }
      />
      <About content={movie.movieData.results[index]}></About>
    </Content>
  );
};

const loadData = (store, param) => {
  const query = param[1].split('&').map((e) => e.split('=')[1]);
  if (query[0] === 'trending') {
    param.pop();
    return store.dispatch(fetchMovieData(param || 1));
  } else if (query[0] === 'search') {
    const query = param[1].split('=')[1] || 'god';
    param.pop();
    param.push(query[1]);
    return store.dispatch(fetchMovieData(param));
  } else {
    const query = param[1].split('&').map((e) => e.split('=')[1]);
    param.pop();
    param.push(query[1]);
    param.push(query[2] || '5');
    return store.dispatch(fetchMovieData(param));
  }
};

const mapStateToProps = (state) => {
  return {
    movie: state.movieState,
  };
};

export default {
  component: connect(mapStateToProps, {
    fetchMovieData,
  })(Details),
  loadData,
};
