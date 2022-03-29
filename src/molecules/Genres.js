import { Chip } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { LRpadding } from '../atom/style';

const Genres = ({ type }) => {
  const [searchparam, setSearchParam] = useSearchParams();
  const [selgenres, setSelgenres] = useState([]);
  const genres = useSelector((state) => state.movieState.genresData);
  const gen = searchparam.get('genres');
  const rate = searchparam.get('rating');

  useEffect(() => {
    if (selgenres.toString() !== gen) {
      if (gen.includes(',')) {
        const temp = gen.split(',').map((g) => Number(g));
        setSelgenres(temp);
      } else if (gen !== '') {
        const temp = [...selgenres, Number(gen)];
        setSelgenres(temp);
      }
    }
  }, [gen]);

  const handleAdd = (genre) => {
    const temp = [...selgenres, genre.id];
    setSelgenres(temp);
    setSearchParam(
      createSearchParams({ genres: temp.toString(), rating: rate })
    );
  };

  const handleRemove = (genre) => {
    const temp = selgenres.filter((g) => g !== genre.id);
    setSelgenres(temp);
    setSearchParam(
      createSearchParams({ genres: temp.toString(), rating: rate })
    );
  };

  return (
    <LRpadding>
      {genres &&
        genres.map(
          (genre) =>
            selgenres.includes(genre.id) && (
              <Chip
                style={{ margin: 2 }}
                label={genre.name}
                key={genre.id}
                size='small'
                color='primary'
                clickable
                onDelete={() => handleRemove(genre)}
              />
            )
        )}
      {genres &&
        genres.map(
          (genre) =>
            !selgenres.includes(genre.id) && (
              <Chip
                style={{ margin: 2 }}
                label={genre.name}
                key={genre.id}
                size='small'
                clickable
                onClick={() => handleAdd(genre)}
              />
            )
        )}
    </LRpadding>
  );
};

export default Genres;
