import { Chip } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { LRpadding } from '../atom/style';

const Genres = ({ genres }) => {
  const [searchparam, setSearchParam] = useSearchParams();
  const [selgenres, setSelgenres] = useState([]);
  const gen = searchparam.get('genres');
  const rate = searchparam.get('rating');

  useEffect(() => {
    console.log(genres);
    if (selgenres.toString() !== gen) {
      if (gen.includes(',')) {
        const temp = gen.split(',').map((g) => Number(g));
        setSelgenres(temp);
      } else if (gen !== '') {
        const temp = [...selgenres, Number(gen)];
        setSelgenres(temp);
      }
    }
  }, [gen, genres]);

  const handleAdd = (genre) => {
    const temp = [...selgenres, genre.id];
    setSelgenres(temp);
    setSearchParam(createSearchParams({ genres: temp.toString(), rating: rate }));
  };

  const handleRemove = (genre) => {
    const temp = selgenres.filter((g) => g !== genre.id);
    setSelgenres(temp);
    setSearchParam(createSearchParams({ genres: temp.toString(), rating: rate }));
  };

  return (
    <LRpadding>
      {genres[0] &&
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
      {genres[0] &&
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
