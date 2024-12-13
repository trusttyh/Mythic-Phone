import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock, faAddressBook, faTh } from '@fortawesome/free-solid-svg-icons';

import Keypad from './keypad';
import RecentList from './recent-index';
import ContactsList from './contacts';
import { readCalls } from './action';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100vh', // Full height of viewport
    background: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'column',
  },
  limitedWrapper: {
    height: '100vh', // Full height of viewport
    background: theme.palette.secondary.main,
  },
  content: {
    flex: 1, // Allow content to grow and fill available space
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingBottom: '50px', // Add padding for the footer
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
  tabPanel: {
    height: '100%',
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    position: 'fixed',
    bottom: '6%',
    width: '16%',
    backgroundColor: '#161616',
    padding: '10px 0',
    boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
	  height: '7%',
	  borderBottomLeftRadius: '10%',
	  borderBottomRightRadius: '10%',
  },
  footerItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '12px',
    color: '#8e8e93', // Gray for inactive
  },
  active: {
    color: '#4D90FE', // Blue for active tab
  },
  icon: {
    fontSize: '22px',
    marginBottom: '3px',
  },
}));

const PhoneApp = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const limited = useSelector((state) => state.phone.limited);
  const callData = useSelector((state) => state.call.call);
  const callHistory = useSelector((state) => state.data.data.calls);

  const [activeTab, setActiveTab] = useState(3); // Keypad is the default active tab

  useEffect(() => {
    if (callHistory.filter((c) => Boolean(c) && c.unread).length > 0) {
      props.readCalls();
    }
  }, [callHistory]);

  useEffect(() => {
    if (callData != null && callData.state !== 1) {
      history.push(`/apps/phone/call/${callData.number}`);
    }
  }, [callData]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {limited ? (
        <div className={classes.limitedWrapper}>
          <Keypad />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <div
              className={classes.tabPanel}
              role="tabpanel"
              hidden={activeTab !== 0}
              id="favorites"
            >
              {activeTab === 0 && <div>Favorites Component</div>}
            </div>
            <div
              className={classes.tabPanel}
              role="tabpanel"
              hidden={activeTab !== 1}
              id="recent"
            >
              {activeTab === 1 && <RecentList />}
            </div>
            <div
              className={classes.tabPanel}
              role="tabpanel"
              hidden={activeTab !== 2}
              id="contacts"
            >
              {activeTab === 2 && <ContactsList />}
            </div>
            <div
              className={classes.tabPanel}
              role="tabpanel"
              hidden={activeTab !== 3}
              id="keypad"
            >
              {activeTab === 3 && <Keypad />}
            </div>
          </div>

          {/* Footer with Icons and Labels */}
          <div className={classes.footer}>
            <div
              className={`${classes.footerItem} ${activeTab === 0 ? classes.active : ''}`}
              onClick={() => handleTabChange(0)}
            >
              <FontAwesomeIcon icon={faStar} className={classes.icon} />
              <span>Favourites</span>
            </div>
            <div
              className={`${classes.footerItem} ${activeTab === 1 ? classes.active : ''}`}
              onClick={() => handleTabChange(1)}
            >
              <FontAwesomeIcon icon={faClock} className={classes.icon} />
              <span>Recents</span>
            </div>
            <div
              className={`${classes.footerItem} ${activeTab === 2 ? classes.active : ''}`}
              onClick={() => handleTabChange(2)}
            >
              <FontAwesomeIcon icon={faAddressBook} className={classes.icon} />
              <span>Contacts</span>
            </div>
            <div
              className={`${classes.footerItem} ${activeTab === 3 ? classes.active : ''}`}
              onClick={() => handleTabChange(3)}
            >
              <FontAwesomeIcon icon={faTh} className={classes.icon} />
              <span>Keypad</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default connect(null, { readCalls })(PhoneApp);
