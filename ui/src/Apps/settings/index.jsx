import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Grid,
  Avatar,
  Button,
  ButtonGroup,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CustomToggle.css';

// Custom Hook for styles
const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    background: 'linear-gradient(180deg, #000000 0%, #1C1C1E 100%)', // Subtle gradient background
    paddingTop: theme.spacing(1),
    overflowY: 'auto',
    fontFamily: 'Poppins, sans-serif',
  },
  sectionBox: {
    width: '90%',
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    marginBottom: 20,
    boxShadow: '0 4px 8px rgba(0,0,0,0.3)', // Enhanced shadow
    marginLeft: '5%',
    paddingBottom: 20,
  },
  personalInfoWrapper: {
    width: '90%',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#1C1C1E',
    marginLeft: '5%',
    marginTop: 20,
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#333',
    },
  },
  settingsSection: {
    backgroundColor: '#1C1C1E',
    padding: '10px 20px',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#333',
    },
    marginLeft: 10,
    marginTop: 10,
    width: '95%',
  },
  avatar: {
    color: '#FFFFFF',
    height: 50,
    width: 50,
    fontSize: 24,
    borderRadius: '50%',
    marginRight: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Avatar shadow
  },
  avatarIcon: {
    fontSize: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  arrow: {
    fontSize: 18,
    color: '#C8C8CC',
  },
  toggle: {
    fontSize: 18,
    color: '#007AFF',
  },
  squareAvatar: {
    borderRadius: 8,
    height: 45,
    width: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  personalDetailsText: {
    fontSize: '15px',
    color: '#8E8E93',
  },
  personalName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#FFFFFF',
  },
  statusText: {
    fontSize: '15px',
    color: '#8E8E93',
  },
}));

const CustomToggle = ({ checked, onChange }) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange(!isOn);
  };

  return (
    <label>
      <input type="checkbox" className="checkbox" checked={isOn} onChange={toggleSwitch} />
      <div className={`switch ${isOn ? 'switchOn' : ''}`} onClick={toggleSwitch}></div>
    </label>
  );
};

// Category Components
const CategorySection = ({ title, items, onItemClick }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.sectionBox}>
      <div className={classes.settingsGroup}>
        <div className={classes.sectionHeader}>{title}</div>
        {items.map((item, index) => (
          <Paper
            key={index}
            className={classes.settingsSection}
            onClick={() => onItemClick(item)}
          >
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: item.color }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', item.icon]} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>{item.text}</div>
                {item.status && (
                  <div className={classes.statusText}>
                    {item.status}
                  </div>
                )}
              </Grid>
              <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
            </Grid>
          </Paper>
        ))}
      </div>
    </div>
  );
};

const SettingsPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const settings = useSelector((state) => state.data.data.player.PhoneSettings);
  const player = useSelector((state) => state.data.data.player);
  const [notifs, setNotifs] = useState(settings.notifications);

  const navigate = (path) => {
    history.push(`/apps/settings/${path}`);
  };

  const toggleNotifs = () => {
    props.UpdateSetting('notifications', !notifs);
    setNotifs(!notifs);
  };

  const volumeAdd = (e) => {
    e.preventDefault();
    if (settings.volume < 100) props.UpdateSetting('volume', settings.volume + 5);
  };

  const volumeMinus = (e) => {
    e.preventDefault();
    if (settings.volume >= 5) props.UpdateSetting('volume', settings.volume - 5);
  };

  const toggleMute = (e) => {
    e.preventDefault();
    if (settings.volume === 0) props.UpdateSetting('volume', 100);
    else props.UpdateSetting('volume', 0);
  };

  const category1Items = [
    { icon: 'plane', text: 'Airplane Mode', color: '#DA9520', disabled: true },
    { icon: 'wifi', text: 'Wi-Fi', color: '#007CFC', status: 'Not connected' },
    { icon: 'bluetooth', text: 'Bluetooth', color: '#0A76FE', status: 'On' },
    { icon: 'signal', text: 'Mobile Data', color: '#30CC53', status: 'Off' },
    { icon: 'link', text: 'Personal Hotspot', color: '#3DF97D', status: 'Off' },
  ];

  const category2Items = [
    { icon: 'bell-on', text: 'Notifications', color: '#34C759' },
    { icon: 'bell-on', text: 'Application Notifications', color: '#5856D6' },
    { icon: 'volume-high', text: 'Volume', color: '#32D74B' },
    { icon: 'image', text: 'Wallpaper', color: '#FF9500' },
    { icon: 'palette', text: 'Colors', color: '#6A1B9A' },
  ];

  const category3Items = [
    { icon: 'moon', text: 'Do Not Disturb', color: '#FF3B30' },
    { icon: 'cogs', text: 'General', color: '#5856D6' },
    { icon: 'storage', text: 'Storage', color: '#007AFF' },
    { icon: 'battery-full', text: 'Battery', color: '#FF3B30' },
  ];

  const category4Items = [
    { icon: 'user-cog', text: 'Privacy Settings', color: '#FF9500' },
    { icon: 'lock', text: 'Security', color: '#FF3B30' },
   
    { icon: 'envelope', text: 'Email Settings', color: '#32D74B' },
    { icon: 'globe', text: 'Language & Region', color: '#007AFF' },
    { icon: 'fingerprint', text: 'Biometrics', color: '#28A745' },
  ];

  const category5Items = [
    { icon: 'font', text: 'Text Size', color: '#FF9500' },
    { icon: 'color-palette', text: 'Display Settings', color: '#007AFF' },
    { icon: 'braille', text: 'Accessibility', color: '#32D74B' },
    { icon: 'volume-down', text: 'Sound Settings', color: '#5856D6' },
    { icon: 'eye', text: 'Screen Time', color: '#FF3B30' },
  ];

  const category6Items = [
    { icon: 'wifi', text: 'Network Settings', color: '#0A76FE' },
    { icon: 'upload', text: 'Software Update', color: '#32D74B' },
    { icon: 'usb', text: 'Connected Devices', color: '#007AFF' },
    { icon: 'tools', text: 'Device Maintenance', color: '#FF9500' },
    { icon: 'shield-alt', text: 'Security Updates', color: '#FF3B30' },
  ];

  const handleSettingClick = (item) => {
    if (item.text === 'Notifications') {
      toggleNotifs();
    } else if (item.text === 'Volume') {
      console.log('Volume settings not implemented yet.');
    } else {
      navigate(item.text.toLowerCase().replace(/\s+/g, '_'));
    }
  };

  return (
    <div className={classes.wrapper}>
      <Grid container direction="column">
        {/* Personal Info Section */}
        <Paper className={classes.personalInfoWrapper} onClick={() => navigate('profile')}>
          <Grid container alignItems="center">
            <Avatar className={classes.avatar}>
              <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'user']} />
            </Avatar>
            <Grid item xs>
              <div className={classes.personalName}>{`${player.First} ${player.Last}`}</div>
              <div className={classes.personalDetailsText}>Contact Information & Personal Information</div>
            </Grid>
            <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
          </Grid>
        </Paper>

        {/* Additional Settings */}
        <div className={classes.sectionBox}>
          <Paper className={classes.settingsSection} onClick={() => navigate('app_notifs')}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#5856D6' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'bell-on']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Application Notifications</div>
              </Grid>
              <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
            </Grid>
          </Paper>

          <Paper className={classes.settingsSection}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#32D74B' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'volume-high']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Volume</div>
              </Grid>
              <ButtonGroup>
                <Button onClick={toggleMute} style={{ color: settings.volume === 0 ? '#FF3B30' : '#32D74B' }}>
                  <FontAwesomeIcon icon={settings.volume === 0 ? ['fas', 'volume-mute'] : ['fas', 'volume-high']} />
                </Button>
                <Button onClick={volumeMinus} style={{ color: '#FF9500' }}>
                  <FontAwesomeIcon icon={['fas', 'minus']} />
                </Button>
                <Button onClick={volumeAdd} style={{ color: '#007AFF' }}>
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </Button>
              </ButtonGroup>
            </Grid>
          </Paper>

          <Paper className={classes.settingsSection} onClick={() => navigate('wallpaper')}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#FF9500' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'image']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Wallpaper</div>
              </Grid>
              <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
            </Grid>
          </Paper>

          <Paper className={classes.settingsSection} onClick={() => navigate('colors')}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#6A1B9A' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'palette']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Colors</div>
              </Grid>
              <FontAwesomeIcon className={classes.arrow} icon={['fas', 'chevron-right']} />
            </Grid>
          </Paper>
        </div>

        {/* Category Sections */}
        <CategorySection items={category1Items} onItemClick={handleSettingClick} />
        <CategorySection items={category2Items} onItemClick={handleSettingClick} />
        <CategorySection items={category3Items} onItemClick={handleSettingClick} />
        <CategorySection items={category4Items} onItemClick={handleSettingClick} />
        <CategorySection items={category5Items} onItemClick={handleSettingClick} />
        <CategorySection items={category6Items} onItemClick={handleSettingClick} />

        {/* Device Information Section */}
        <div className={classes.sectionBox}>
          <Paper className={classes.settingsSection}>
            <Grid container alignItems="center">
              <Avatar className={`${classes.avatar} ${classes.squareAvatar}`} style={{ background: '#007AFF' }}>
                <FontAwesomeIcon className={classes.avatarIcon} icon={['fas', 'info-circle']} />
              </Avatar>
              <Grid item xs>
                <div className={classes.sectionHeader}>Device Information</div>
                <div className={classes.personalDetailsText}>
                  <div>Model: iPhone X</div>
                  <div>OS Version: iOS 16.4</div>
                  <div>Storage: 128 GB</div>
                  <div>Battery: 85%</div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Grid>
    </div>
  );
};

export default SettingsPage;
