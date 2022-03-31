import React from 'react';
import { AboutModel, DescriptionModel, TitleModel } from '../atom/style';
import { Tagline } from '../atom/fields';
import { Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';

const About = ({ content, video }) => {
  return (
    <AboutModel>
      <TitleModel>
        {content.name || content.title}({(content.first_air_date || content.release_date || '-----').substring(0, 4)})
      </TitleModel>
      {content.tagline && <Tagline>{content.tagline}</Tagline>}
      <DescriptionModel>{content.overview}</DescriptionModel>
      <div></div>
      {/* <Button
        variant='contained'
        startIcon={<YouTubeIcon />}
        color='secondary'
        target='__blank'
        href={`https://www.youtube.com/watch?v=${video}`}>
        Watch the Trailer
      </Button> */}
    </AboutModel>
  );
};

export default About;
