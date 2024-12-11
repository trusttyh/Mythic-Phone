import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Grid, Paper, Typography, Fab, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useMyApps } from '../../hooks';
import { install } from './action';
import banner from '../../banner.png';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    backgroundColor: '#1c1c1e',
    padding: 20,
    overflow: 'hidden',
  },
  banner: {
    width: '100%',
    borderRadius: 20,
    marginBottom: 20,
  },
  search: {
    marginBottom: 20,
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    '& .MuiInputBase-root': {
      color: '#f0f0f5',
    },
    '& .MuiInputLabel-root': {
      color: '#b0b0b0',
    },
  },
  appList: {},
  emptyMsg: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#b0b0b0',
    marginTop: '25%',
  },
  appPaper: {
    backgroundColor: '#2c2c2e',
    borderRadius: 12,
    padding: 15,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  },
  appIcon: {
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    borderRadius: '0.6rem',
    background: 'linear-gradient(135deg, #ff6f00, #d32f2f)', // Gradient background
    border: '1px solid rgba(255, 255, 255, 0.5)', // Subtle border
  },
  appName: {
    flex: 1,
    color: '#f0f0f5',
    fontSize: 20,
    fontWeight: '600',
  },
  actionButton: {
    position: 'absolute',
    top: 20,
    right: 20,
	height: '55%',
	width: '12%',
    backgroundColor: '#007aff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#005bb5',
    },
  },
}));

export default () => {
  const classes = useStyles();
  const apps = useMyApps();
  const installed = useSelector((state) => state.data.data.player?.Apps?.installed);
  const dispatch = useDispatch();

  const [searchVal, setSearchVal] = useState('');
  const onSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const [available, setAvailable] = useState([]);
  useEffect(() => {
    setAvailable(
      Object.keys(apps)
        .filter(
          (k) =>
            !apps[k].hidden &&
            (apps[k].label.toUpperCase().includes(searchVal.toUpperCase()) ||
              searchVal === '') &&
            !installed.includes(k),
        )
        .map((k) => apps[k]),
    );
  }, [searchVal, installed, apps]);

  return (
    <div className={classes.wrapper}>
      <img src={banner} alt="App Store Banner" className={classes.banner} />
      <div className={classes.search}>
        <TextField
          variant="outlined"
          className={classes.searchInput}
          label="Search For App"
          value={searchVal}
          onChange={onSearchChange}
        />
      </div>
      <Grid className={classes.appList} container spacing={2} justifyContent="flex-start">
        {available.length > 0 ? (
          available.map((app) => (
            <Grid item xs={12} key={app.name}>
              <Paper className={classes.appPaper}>
                <Avatar
                  variant="rounded"
                  className={classes.appIcon}
                  style={{
                    background: app.color || 'linear-gradient(135deg, #ff6f00, #d32f2f)', // Default gradient if color is not provided
                  }}
                >
                  <FontAwesomeIcon
                    icon={app.icon}
                    style={{ color: '#fff' }} // Ensures the icon is visible on colored background
                  />
                </Avatar>
                <Typography className={classes.appName}>{app.label}</Typography>
                <Fab
                  size="small"
                  aria-label={'Install'}
                  className={classes.actionButton}
                  onClick={() => {
                    if (installed) {
                      dispatch(install(app.name));
                    }
                  }}
                >
                  <FontAwesomeIcon icon={'download'} />
                </Fab>
              </Paper>
            </Grid>
          ))
        ) : (
          <div className={classes.emptyMsg}>No Apps Available To Download</div>
        )}
      </Grid>
    </div>
  );
};
