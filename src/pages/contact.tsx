import {
  Avatar, Box, Card, CardActions, CardContent, CardMedia,
  createStyles, IconButton, makeStyles, Typography,
} from '@material-ui/core';
import {
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  GitHub as GitHubIcon,
} from '@material-ui/icons';
import React from 'react';

import MeAvatar from '../assets/images/me-avatar.jpeg';

const useStyles = makeStyles(() => createStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    width: 80,
    height: 80,
    border: '2px solid #fff',
    margin: '-40px 210px 0 auto',
    '& > img': {
      margin: 0,
    },
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexGrow={1} height="calc(100vh - 64px)">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={'https://images.unsplash.com/photo-1568646815107-01383e0a8844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80'}
        />
        <Avatar className={classes.avatar} alt="Remy Sharp" src={MeAvatar} />
        <CardContent>
          <Typography variant='h5' color='textSecondary' align='center'>Apoorva Sharma</Typography>
          <Typography variant='subtitle1' color="textSecondary" component="div">
          Highly motivated <Box fontWeight='fontWeightBold' display='inline'>back-end engineer</Box> proficient in Java, Python and data analytics. Seeks
          to bring 4 years of professional technical experience to a <Box fontWeight='fontWeightBold' display='inline'>product manager</Box> position in a
          goal-oriented, fast-paced tech environment.
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="space-evenly" flexGrow={1}>
            <IconButton aria-label="linkedin">
              <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="github">
              <GitHubIcon />
            </IconButton>
            <IconButton aria-label="instagram">
              <InstagramIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
