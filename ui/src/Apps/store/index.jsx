import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import MyList from './MyList';
import StoreList from './StoreList';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', // Light shadow for better separation
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    overflowY: 'auto',
	background: '#1c1c1e',
	height: '100%',
  },
  indicator: {
    backgroundColor: theme.palette.primary.main, // Customize tab indicator color
  },
}));

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.store.tab);

  const handleTabChange = (event, newValue) => {
    dispatch({
      type: 'SET_STORE_TAB',
      payload: { tab: newValue },
    });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <div className={classes.tabPanel} role="tabpanel" hidden={activeTab !== 0}>
          {activeTab === 0 && <StoreList />}
        </div>
        <div className={classes.tabPanel} role="tabpanel" hidden={activeTab !== 1}>
          {activeTab === 1 && <MyList />}
        </div>
      </div>
    </div>
  );
};
