import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { SearcDiv } from '../atom/style';
import { useDispatch } from 'react-redux';
import { fetchMovieData } from '../redux/action';
import {
  createSearchParams,
  useParams,
  useSearchParams,
} from 'react-router-dom';

const SearchArea = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [searchparam, setSearchParam] = useSearchParams();
  const search = searchparam.get('search');

  const fetchSearch = async () => {
    const params = [];
    params.push(id);
    params.push(search);
    dispatch(fetchMovieData(params));
  };

  return (
    <SearcDiv>
      <TextField
        style={{ flex: 1 }}
        label='Search'
        variant='filled'
        onChange={(e) => {
          setSearchParam(createSearchParams({ search: e.target.value }));
        }}
      />
      <Button
        style={{ marginLeft: 10 }}
        variant='contained'
        onClick={fetchSearch}>
        <SearchIcon />
      </Button>
    </SearcDiv>
  );
};

export default SearchArea;
