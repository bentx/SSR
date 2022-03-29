import React from 'react';
import { Badge } from '@material-ui/core';
import { img_300, unavailable } from '../atom/config/config';
import { Poster } from '../atom/images';
import { CardButton } from '../atom/button';
import { BoldTitle, SubTitle } from '../atom/fields';

const ThumbnailCard = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <CardButton>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? 'secondary' : 'primary'}
      />
      <Poster src={poster ? `${img_300}/${poster}` : unavailable} alt={title} />
      <BoldTitle>{title}</BoldTitle>
      <SubTitle>
        {media_type === 'tv' ? 'TV Series' : 'Movie'}
        <SubTitle> {date}</SubTitle>
      </SubTitle>
    </CardButton>
  );
};

export default ThumbnailCard;
