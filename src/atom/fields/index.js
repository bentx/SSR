import styled from "styled-components";

export const Title = styled.span`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  font-size: 2vw;
  padding: 4px;
  border-radius: 50px;
  font-family: "Montserrat", sans-serif;
  color: white;
  @media (max-width: 1000px) {
    font-size: 5.4vw;
  }
`;

export const BoldTitle = styled.b`
  width: 100%;
  text-align: center;
  font-size: 17px;
  padding: 8px 0;
`;

export const SubTitle = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0 2px;
  padding-bottom: 3px;
`;

export const Tagline = styled.i`
  padding-bottom: 10px;
  align-self: center;
`;
