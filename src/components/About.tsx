import './About.css';
import {
  Card, CardContent, CardMedia, Container, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import about from '../assets/images/about.jpeg';
import useResponsive from '../hooks/useResponsive';

export default function About() {
  const projectSection = React.useRef(null);
  const fetchByMediaQuery = useResponsive();

  return (
    <div ref={projectSection}>
      <Container>
        <Grid container spacing={fetchByMediaQuery({ xs: 2, md: 5 })}>
          <Grid item sm={12} md={6}>
            <Card raised={true}>
              <CardMedia className="project-media" image={about} title="about" />
              <CardContent>
                <Typography variant="h5" color="primary" component="p" align="justify">
                  I am a Software Engineer, and I enjoy coding. However, even more than the
                  implementation of the logic for code, I enjoyed interacting with stakeholders to
                  collect requirements for the applications I built, and laying out the
                  user-centred design specifications. I thrived when dealing with ambiguity and
                  defining the user experience for the products I developed.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
