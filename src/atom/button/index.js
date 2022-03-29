import styled from "styled-components";

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 5px;
  margin: 5px 0;
  background-color: #282c34;
  border-radius: 10px;
  position: relative;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 550px) {
    width: 46%;
  }
  &:hover {
    background-color: white;
    color: black;
  }
`;
