import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { useMyApps } from '../../hooks';
import App from './App';
import banner from '../../banner2.png';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    backgroundColor: '#1c1c1e',
  },
  search: {
    padding: 20,
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
  appList: {
    padding: '0 20px',
  },
  emptyMsg: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#b0b0b0',
    marginTop: '25%',
  },
}));

export default () => {
  const classes = useStyles();
  const apps = useMyApps();
  const installed = useSelector(
    (state) => state.data.data.player?.Apps?.installed,
  );

  const [searchVal, setSearchVal] = useState('');
  const onSearchChange = (e) => {
    setSearchVal(e.target.value);
  };

  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setFiltered(
      installed
        .filter((k) =>
          apps[k]?.canUninstall &&
          apps[k]?.label.toUpperCase().includes(searchVal.toUpperCase())
        )
        .map((k) => apps[k]),
    );
  }, [searchVal, installed, apps]);

  return (
    <div className={classes.wrapper}>
      <img
        src={banner}
        alt="banner"
        style={{ width: '100%', borderRadius: '20px' }}
      />
      <div className={classes.search}>
        <TextField
          variant="outlined"
          className={classes.searchInput}
          label="Search For App"
          value={searchVal}
          onChange={onSearchChange}
        />
      </div>
      <Grid className={classes.appList} container spacing={2}>
        {filtered.length > 0 ? (
          filtered.map((app) => <App key={app.name} app={app} installed={true} />)
        ) : (
          <div className={classes.emptyMsg}>No Apps Available To Uninstall</div>
        )}
      </Grid>
    </div>
  );
};
