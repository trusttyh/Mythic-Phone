import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Paper, Button, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'; // Import a sharing icon


import { useMyApps, useAlert } from '../../hooks';
import Nui from '../../util/Nui';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    background: 'linear-gradient(180deg, #000000 0%, #1C1C1E 100%)',
    position: 'relative',
    padding: theme.spacing(2),
    overflowY: 'auto',
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  dataWrapper: {
    height: '95%',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#ffffff52',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.primary.main,
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
  },
  contactHeader: {
    padding: '30px 20px',
    backgroundColor: '#1C1C1E',
    width: '95%',
    textAlign: 'left',
    borderRadius: 12,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
	marginLeft: 10,
	border: '1px solid #2C2C2E', 

  },
  avatar: {
    height: 80,
    width: 80,
    color: '#FFF',
    background: theme.palette.primary.main,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  personalName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  avatarIcon: {
    fontSize: 40,
    color: '#FFF',
  },
  contactDetails: {
    color: '#FFFFFF',
  },
  phoneText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: -10,
  },
  shareButton: {
    marginTop: 10,
    padding: '6px 20px',
    fontSize: 14,
    color: '#FFF',
  },
  profileSection: {
    padding: 20,
    backgroundColor: '#1C1C1E',
    width: '95%',
    margin: 'auto',
    marginBottom: 20,
    borderRadius: 12,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    border: '1px solid #2C2C2E', 
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: '600',
    color: '#FFFFFF',
    paddingBottom: 10,
    borderBottom: '1px solid #2C2C2E',
    marginBottom: 15,
  },
  sectionBody: {
    fontSize: 16,
    color: '#8E8E93',
    lineHeight: '1.6',
  },
  bodyItem: {
    padding: '8px 0',
    color: '#FFFFFF',
  },
  highlight: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  copyIcon: {
    fontSize: '1rem',
    color: '#919395',
    cursor: 'pointer',
    '&:hover': {
      color: '#FFF',
    },
  },
}));

export default (props) => {
  const showAlert = useAlert();
  const classes = useStyles();
  const myApps = useMyApps();
  const player = useSelector((state) => state.data.data.player);

  const onShare = async () => {
    try {
      let res = await (await Nui.send('ShareMyContact')).json();
      showAlert(
        res
          ? 'Contact Shared to All Nearby'
          : 'Unable to Share Contact',
      );
    } catch (err) {
      console.log(err);
      showAlert('Unable to Share Contact');
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.dataWrapper}>
        <Paper className={classes.contactHeader}>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon
              icon={['fas', 'user']}
              className={classes.avatarIcon}
            />
          </Avatar>
          <div className={classes.contactDetails}>
		  	<div className={classes.personalName}>{`${player.First} ${player.Last}`}</div>
            <div className={classes.phoneText}>
              {player.Phone}
			  <IconButton className={classes.copyIcon}>
    			<FontAwesomeIcon icon={faShareAlt} />  {/* Changed from faCopy to faShareAlt */}
  			  </IconButton>
            </div>
          </div>
        </Paper>

        <Paper className={classes.profileSection}>
          <div className={classes.sectionHeader}>Personal Details</div>
          <div className={classes.sectionBody}>
            <div className={classes.bodyItem}>
              <span className={classes.highlight}>Server ID: </span>
              {player.Source}
            </div>
            <div className={classes.bodyItem}>
              <span className={classes.highlight}>State ID: </span>
              {player.SID}
            </div>
            <div className={classes.bodyItem}>
              <span className={classes.highlight}>Passport ID: </span>
              {player.User}
            </div>
          </div>
        </Paper>

        <Paper className={classes.profileSection}>
          <div className={classes.sectionHeader}>Application Aliases</div>
          <div className={classes.sectionBody}>
            {Object.keys(player.Alias).map((k) => {
              let alias = player.Alias[k];
              let app = myApps[k];
              if (!Boolean(app)) return null;
              if (alias instanceof Object) {
                return (
                  <div key={`alias-${k}`} className={classes.bodyItem}>
                    <span className={classes.highlight}>{`${app?.label} `}</span>
                    {alias.name}
                  </div>
                );
              } else {
                return (
                  <div key={`alias-${k}`} className={classes.bodyItem}>
                    <span className={classes.highlight}>{`${app?.label} `}</span>
                    {alias}
                  </div>
                );
              }
            })}
          </div>
        </Paper>
      </div>
    </div>
  );
};
