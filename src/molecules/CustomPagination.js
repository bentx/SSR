import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { ThemeProvider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { darkTheme } from '../atom/style/MaterialUI';
import { PaginationStyle } from '../atom/style';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CustomPagination = ({ numOfPages = 2 }) => {
  const navigate = useNavigate();
  const value = useSelector((state) => state.routeState);
  const [searchParams, setSearchParams] = useSearchParams();
  const genres = searchParams.get('genres') || '[]';
  const rating = searchParams.get('rating') || '5';

  const handlePageChange = (page) => {
    if (value === 0) {
      navigate(`/trending/${page}`);
    }
    if (value === 1) {
      navigate(`/movie/${page}?genres=${genres}&rating=${rating}`);
    }
    window.scroll(0, 0);
  };

  return (
    <PaginationStyle>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </PaginationStyle>
  );
};

export default CustomPagination;
