import './work.css';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
} from '@material-ui/core';

import React from 'react';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import useResponsive from '../hooks/useResponsive';

import GrubGoImage from '../assets/images/grubgo.jpeg';
import ModelingFutureImage from '../assets/images/modeling-future.png';
import TriggersImage from '../assets/images/triggers.png';

export default function Work() {
  const fetchByMediaQuery = useResponsive();
  const mediaStyles = useSlopeCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();

  return (
    <Container>
      <Box display='flex' height='calc(100vh - 80px)'>
        <Grid container className='work-items' alignItems='stretch' spacing={fetchByMediaQuery({ xs: 4, md: 6 })}>
          <Grid item sm={12} md={4} className="work-item side">
            <Grid container direction='column'>
              <Grid item sm={12}>
                <Box height="100px" sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
              </Grid>
              <Grid item sm={12}>
              <Card raised={true}>
                  <CardMedia
                    classes={mediaStyles}
                    image={GrubGoImage}
                  />
                  <CardContent className='work-item-contetnt'>
                    <TextInfoContent
                      classes={textCardContentStyles}
                      heading={'GrubGo'}
                      body={
                        'One cannot think well, love well, sleep well, if one has not dined well. No denial to Virgina Woolfe. Food helps us to boost serotonin and also helps us to socialise and grow bonding with people. We do have various dine-out apps but there are certain things we are still missing which we would like to accomplish with this app idea.'
                      }
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={4} className="work-item mid">
            <Grid container direction='column' >
              <Grid item sm={12}>
              <Card raised={true}>
                  <CardMedia
                    classes={mediaStyles}
                    image={TriggersImage}
                  />
                  <CardContent className='work-item-contetnt'>
                    <TextInfoContent
                      classes={textCardContentStyles}
                      heading={'Consignment Triggers'}
                      body={
                        'Designed and developed trigger feature for every leg of consignment reducing the no. of calls to fleet operators by ~80%. Leveraged Jira software to increase on time delivery per sprint by 9%. Managed cross-functional team and stakeholder communication, and oversaw tech development from inception to implementation.'
                      }
                    />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={12}>
                <Box height="100px" sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={4} className="work-item side">
            <Grid container direction='column'>
              <Grid item sm={12}>
                <Box height="100px" sx={{ display: { xs: 'none', md: 'flex' } }}></Box>
              </Grid>
              <Grid item sm={12}>
                <Card raised={true}>
                  <CardMedia
                    classes={mediaStyles}
                    className="work-item-media modeling-future"
                    image={ModelingFutureImage}
                  />
                  <CardContent>
                    <TextInfoContent
                      classes={textCardContentStyles}
                      heading={'Modelling Future App'}
                      body={
                        'App that helps match fresh graduates to relevant jobs. Prepared PRD defining the requirements for business and technical teams. Gathered user stories, outlining students\' perspective. Implemented wire-frame and mock-ups using Figma.'
                      }
                    />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
