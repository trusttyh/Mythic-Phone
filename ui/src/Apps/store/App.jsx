import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, CircularProgress, Fab, Avatar, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { green, red, yellow } from '@material-ui/core/colors';

import { install, uninstall } from './action';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    marginBottom: 10,
    padding: 10,
    position: 'relative',
  },
  appIcon: {
    width: 50,
    height: 50,
    color: '#f0f0f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    backgroundColor: '#444',
    margin: 'auto',
    transition: 'background-color 0.3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#555',
    },
  },
  appName: {
    margin: '10px 0',
    textAlign: 'center',
    color: '#f0f0f5',
  },
  actionButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  appDetails: {
    display: 'flex',
    alignItems: 'center',
  },
  appDescription: {
    marginTop: 10,
    fontSize: 14,
    color: '#b0b0b0',
  },
}));

const getButtonColor = (installed) => {
  if (installed) return green[500];
  return yellow[500];
};

export default ({ app, installed }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleActionClick = () => {
    if (installed) {
      dispatch(uninstall(app.name));
    } else {
      dispatch(install(app.name));
    }
  };

  return (
    <Grid item xs={12}>
      <Paper className={classes.wrapper} elevation={3}>
        <div className={classes.appDetails}>
          <Avatar
            src={app.icon}
            alt={app.label}
            className={classes.appIcon}
          >
            {app.icon ? null : <FontAwesomeIcon icon="fa-brands fa-adn"  />}
          </Avatar>
          <div className={classes.appName}>{app.label}</div>
        </div>
        <div className={classes.appDescription}>{app.description}</div>
        <Fab
          size="small"
          color="default"
          aria-label={installed ? 'Uninstall' : 'Install'}
          className={classes.actionButton}
          style={{ backgroundColor: getButtonColor(installed) }}
          onClick={handleActionClick}
        >
          <FontAwesomeIcon icon={installed ? 'trash' : 'download'} />
        </Fab>
      </Paper>
    </Grid>
  );
};
