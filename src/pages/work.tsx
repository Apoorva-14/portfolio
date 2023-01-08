import {
  Box, Card, CardContent, CardMedia, Container, Grid,
} from '@material-ui/core';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';

import React from 'react';
import './work.css';
import useResponsive from '../hooks/useResponsive';

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
                    image={'https://miro.medium.com/max/1200/1*CjG9toNeP66yaYIc-Te4zA.png'}
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
            </Grid>
          </Grid>
          <Grid item sm={12} md={4} className="work-item mid">
            <Grid container direction='column' >
              <Grid item sm={12}>
                <Card raised={true}>
                  <CardMedia
                    classes={mediaStyles}
                    image={'https://images.unsplash.com/photo-1503324010925-71cfe52dad2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'}
                  />
                  <CardContent className='work-item-contetnt'>
                    <TextInfoContent
                      classes={textCardContentStyles}
                      heading={'Masked Calling'}
                      body={
                        'App that helps match fresh graduates to relevant jobs. Prepared PRD defining the requirements for business and technical teams. Gathered user stories, outlining students\' perspective. Implemented wire-frame and mock-ups using Figma.'
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
                    image={'https://raw.githubusercontent.com/Apoorva-14/modeling-future/main/Design.png'}
                  />
                  <CardContent className='work-item-contetnt'>
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
