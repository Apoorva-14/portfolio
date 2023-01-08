import './WorkLinks.css';

import React from 'react';
import {
  Badge,
  Container,
  Divider, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Paper,
} from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import DevicesIcon from '@material-ui/icons/Devices';
import RingVolumeIcon from '@material-ui/icons/RingVolume';

export default function WorkLinks() {
  return (
    <Container>
      <Paper elevation={0} className="work-list">
        <List component="nav" aria-label="main triggers">
          <ListItem>
            <ListItemIcon>
              <Badge color="primary" variant="dot">
                <NotificationsActiveIcon />
              </Badge>
            </ListItemIcon>
          <ListItemText primary="Consignment Triggers" />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="launch">
                  <LaunchIcon />
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <RingVolumeIcon />
            </ListItemIcon>
            <ListItemText primary="Masked Calling" />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <LaunchIcon />
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Modelling Future App" />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <LaunchIcon />
                </IconButton>
              </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}
