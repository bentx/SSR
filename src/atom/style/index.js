import styled from 'styled-components';

export const FlexPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 835px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 0;
  }
`;

export const AboutModel = styled.div`
  padding: 10px;
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  justify-content: space-evenly;
  font-weight: 300;
  @media (min-width: 835px) {
    width: 58%;
    padding: 0;
    height: 100%;
  }
`;

export const TitleModel = styled.span`
  height: 12%;
  font-size: 5vw;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  @media (min-width: 835px) {
    font-size: 3.5vw;
  }
`;

export const DescriptionModel = styled.span`
  display: flex;
  height: 40%;
  overflow-y: scroll;
  padding: 15px;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  scrollbar-width: thin; /* Firefox */
  box-shadow: inset 0 0 5px #000000;
  text-align: justify;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 835px) {
    font-size: 22px;
  }
`;

export const PaginationStyle = styled.div`
  width: '100%';
  display: flex;
  justify-content: center;
  margin-top: 10;
`;

export const MovieRating = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 5px;
  margin: 5px 0;
  background-color: #282c34;
  border-radius: 10px;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 550px) {
    width: 46%;
  }
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const LRpadding = styled.div`
  padding: 6px 0;
`;

export const SearcDiv = styled.div`
  display: flex;
  margin: 15px 0;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  cursor: pointer;
  position: fixed;
  display: flex;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  justify-content: center;
  text-transform: uppercase;
  background-color: #39445a;
  font-size: 3vw;
  padding-bottom: 15px;
  box-shadow: 0px 1px 5px black;
  color: white;
  z-index: 100;
  @media (max-width: 550px) {
    padding-top: 15px;
    font-size: 4.4vw;
  }
`;
