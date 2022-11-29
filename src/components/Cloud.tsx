import './Cloud.css';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Grid,
  Slide,
  Typography,
} from '@material-ui/core';
import { OpenInNew as OpenInNewIcon } from '@material-ui/icons';
import React from 'react';
import useIntersect from '../hooks/useIntersectHook';
import useResponsive from '../hooks/useResponsive';

import microservices from '../assets/images/microservices.png';
import datalake from '../assets/images/data-lake.png';
import ansible from '../assets/images/ansible.png';

export default function Cloud() {
  const projectSection = React.useRef(null);
  const [projectVisible] = useIntersect(projectSection);
  const fetchByMediaQuery = useResponsive();

  const slideTimeout = 2000;
  return (
    <div ref={projectSection}>
    <Container>
      <Grid container spacing={fetchByMediaQuery({ xs: 2, md: 5 })}>
        <Grid item sm={12} md={4}>
          <Slide direction="right" in={projectVisible} mountOnEnter unmountOnExit timeout={slideTimeout}>
            <Card>
              <CardMedia className="project-media" image={microservices} title="Microservices" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Packaged microservices as containers and deployed into a Kubernetes cluster. The
                  cluster uses Istio service mesh and microservices communicate with each other
                  over HTTP, gRPC or pubsub.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="open project"
                  href="https://medium.com/@maytan.thegeek/deploying-microservices-on-eks-a-beginners-guide-part-1-1f6f20425802"
                  target="_blank">
                  <OpenInNewIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
        <Grid item sm={12} md={4}>
          <Slide direction="up" in={projectVisible} mountOnEnter unmountOnExit timeout={slideTimeout}>
            <Card>
            <CardMedia className="project-media" image={datalake} title="Data Lake" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Setup a data lake for big data use cases with AWS S3. Implemented custom ETL
                  jobs for high quality data availability. This solution is 15X cheaper than
                  the previous one with only a 15 min added latency.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="open project">
                  <OpenInNewIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
        <Grid item sm={12} md={4}>
          <Slide direction="down" in={projectVisible} mountOnEnter unmountOnExit timeout={slideTimeout}>
            <Card>
              <CardMedia className="project-media" image={ansible} title="Device Fleet Provisioning" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Created Ansible enabled IoT device fleet with OTA update capabilities. The
                  devices are edge controllers built on RaspberryPi and run multiple containers
                  serving different applications.
              </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="open project">
                  <OpenInNewIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
}
