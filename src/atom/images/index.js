import styled from "styled-components";

export const LandscapeModel = styled.img`
  object-fit: contain;
  border-radius: 10px;
  @media (min-width: 835px) {
    display: none;
  }
`;

export const PortrateModel = styled.img`
  display: none;
  object-fit: contain;
  border-radius: 10px;
  @media (min-width: 835px) {
    display: flex;
    width: 38%;
  }
`;

export const Poster = styled.img`
  border-radius: 10px;
`;
