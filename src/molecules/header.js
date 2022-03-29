import React from 'react';
import { HeaderDiv } from '../atom/style';
const Header = () => {
  return (
    <HeaderDiv
      onClick={() => {
        window.scroll(0, 0);
      }}>
      Movie Book
    </HeaderDiv>
  );
};

export default Header;
