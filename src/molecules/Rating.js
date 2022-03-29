import { Rating } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import { createSearchParams, useSearchParams } from 'react-router-dom';
import { MovieRating } from '../atom/style';

const StarRating = () => {
  const [searchparam, setSearchParam] = useSearchParams();
  const [value, setValue] = useState('5');
  const rate = searchparam.get('rating');
  const gen = searchparam.get('genres');

  useEffect(() => {
    if (value !== rate) {
      setValue(rate);
    }
  }, [rate]);

  const handleRating = (ratingValue) => {
    setValue(ratingValue);
    setSearchParam(createSearchParams({ genres: gen, rating: ratingValue }));
  };

  return (
    <MovieRating>
      <Rating
        max={10}
        name='hover-feedback'
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          handleRating(newValue);
        }}
      />
    </MovieRating>
  );
};

export default StarRating;
