import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  TextField,
  Slide,
  Avatar,
  Badge,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { uninstall } from '../../Apps/store/action';
import { useAlert, useAppView, useAppButton, useMyApps } from '../../hooks';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  container: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  inputLabel: {
    color: 'rgba(255, 255, 255, 0.7)', // Your desired color
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', 
    fontWeight: 400,
    fontSize: '0.8rem',
    lineHeight: '1.4375em',
    position: 'absolute',
    left: '38%',
    top: '-7px', // Adjust position if needed
	opacity: 0.5,
    transform: 'translate(0, 20px) scale(1)',
    transition: 'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
  },
  appsTitle: {
    position: 'absolute',
    top: '3.5%', 
    left: '7%', 
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', 
    fontSize: '1rem',
    fontWeight: 600, 
  },
  search: {
    padding: 25,
	background: 'rgba(28, 28, 28, 0.35)',
	
  },
  searchInput: {
    flex: 1,
    width: '100%',
    background: 'rgba(35, 35, 35, 0.35)',
    borderRadius: 7,
	bottom: 12,
	height: '90%',
	transform: 'translateY(-15px)',
	'& .MuiInputBase-input': {
		padding: '12px 0 18px 37px',
		boxSizing: 'content-box',  // Adjust box sizing to include padding in height calculation
		fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
		fontSize: '1rem',
	  },
	  '& .MuiInput-underline:before': {
		borderBottom: 'none',
	  },
	  '& .MuiInput-underline:after': {
		borderBottom: 'none',
	  },
	  '& .MuiInput-underline:hover:before': {
		borderBottom: 'none',
	  },
  },
  appListContainer: {
    flex: 1,
	background: 'rgba(28, 28, 28, 0.35)',
	width: '90%',
    overflowY: 'auto',
    padding: 7.5,
    borderRadius: 8,
    marginBottom: 50,
	marginTop: '15%',
	marginLeft: '5%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
	borderBottomLeftRadius: 15,
	borderBottomRightRadius: 15,
	borderTopLeftRadius: 15,
	borderTopRightRadius: 15,

	'&::-webkit-scrollbar': {
		display: 'none', 
	},

  },
  appItem: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    cursor: 'pointer',
    '&:hover': {
      background: `${theme.palette.primary.main}20`,
    },
  },
  appIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  appLabel: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  menuClose: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  },
  menu: {
    padding: 5,
    background: theme.palette.secondary.main,
    zIndex: 999,
    fontSize: 18,
    margin: 5,
    width: '40%',
  },
  icon: {
	fontSize: 16, 
	marginRight: 8, 
},
}));

const NotifCount = withStyles((theme) => ({
  root: {
    width: 24,
    height: 24,
    fontSize: 16,
    lineHeight: '24px',
    color: '#fff',
    background: '#ff0000',
  },
}))(Avatar);

const CustomSearchInput = (props) => {
	const classes = useStyles();
	return (
	  <TextField
		{...props}
		variant="standard"
		InputLabelProps={{
		  classes: {
			root: classes.searchInput,
		  },
		}}
	  />
	);
  };

export default connect(null, {
  uninstall,
})((props) => {
  const openedApp = useAppView();
  const showAlert = useAlert();
  const appButton = useAppButton();
  const classes = useStyles();
  const history = useHistory();
  const apps = useMyApps();
  const installed = useSelector(
    (state) => state.data.data.player?.Apps?.installed,
  );
  const homeApps = useSelector((state) => state.data.data.player?.Apps?.home);
  const notifications = useSelector(
    (state) => state.notifications.notifications,
  );

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
    return () => {
      setOpen(false);
    };
  }, []);

  const [searchVal, setSearchVal] = useState('');
  const [filteredApps, setFilteredApps] = useState(
    Object.keys(apps).length > 0 ? installed : [],
  );
  const [contextApp, setContextApp] = useState(null);
  const [offset, setOffset] = useState({
    left: 110,
    top: 0,
  });

  useEffect(() => {
    if (Object.keys(apps).length > 0) {
      setFilteredApps([
        ...new Set(
          installed.filter((app) => {
            if (
              apps[app] &&
              apps[app].label
                .toUpperCase()
                .includes(searchVal.toUpperCase())
            ) {
              return app;
            }
          }),
        ),
      ]);
    }
  }, [searchVal]);

  const onClick = (app) => {
    openedApp(app);
    history.push(`/apps/${app}`);
  };

  const openApp = () => {
    openedApp(contextApp);
    history.push(`/apps/${contextApp}`);
  };

  const onRightClick = (e, app) => {
    e.preventDefault();
    setOffset({ left: e.clientX - 2, top: e.clientY - 4 });
    if (app != null) setContextApp(app);
  };

  const closeContext = (e) => {
    if (e != null) e.preventDefault();
    setContextApp(null);
  };

  const addToHome = async () => {
    await appButton('add', 'Home', contextApp);
    showAlert(`${apps[contextApp].label} Added To Home Screen`);
    closeContext();
  };

  const uninstallApp = () => {
    props.uninstall(contextApp);
    closeContext();
  };

  const onSearchChange = (e) => {
    setSearchVal(e.target.value);
  };
  

  return (
	<Slide in={open} direction="up">
	  <div className={classes.wrapper}>
		<div className={classes.background} />
		<div className={classes.container}>
		<div className={classes.appsTitle}>Apps</div>
		  <div className={classes.appListContainer}>
			{filteredApps
			  .sort((a, b) => {
				if (apps[a]?.label > apps[b]?.label) return 1;
				else if (apps[a]?.label < apps[b]?.label) return -1;
				else return 0;
			  })
			  .map((app, i) => {
				let data = apps[app];
				if (data) {
				  return (
					<div
					  key={i}
					  className={classes.appItem}
					  title={data.label}
					  onClick={() => onClick(app)}
					  onContextMenu={(e) => onRightClick(e, app)}
					>
						
					  {data.unread > 0 ? (
						<Badge
						  overlap="circle"
						  anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						  }}
						  badgeContent={
							<NotifCount
							  style={{
								border: `2px solid ${data.color}`,
							  }}
							>
							  {data.unread}
							</NotifCount>
						  }
						>
						  <Avatar
							variant="rounded"
							className={classes.appIcon}
							style={{
							  background: `${data.color}`,
							}}
						  >

						  </Avatar>
						</Badge>
					  ) : (
						<Avatar
						  variant="rounded"
						  className={classes.appIcon}
						  style={{
							background: `${data.color}`,
						  }}
						>
						  <FontAwesomeIcon icon={data.icon} />
						</Avatar>
					  )}
					  <div className={classes.appLabel}>
						{data.label}
					  </div>
					</div>
				  );
				} else return null;
			  })}
		  </div>
		  <svg
		    xmlns="http://www.w3.org/2000/svg"
		    viewBox="0 0 512 512"
		    fill="#FFFFFF"
		    className="icon"
		    width="15" /* Set width */
		    height="15" /* Set height */
			transform="translate(40, 42)"
		  >
		    <path class="icon" d="M376.324,312.508c49.638-78.774,40.238-184.326-28.306-252.871c-79.507-79.515-208.872-79.515-288.388,0
		      c-79.507,79.516-79.507,208.873,0,288.379c68.536,68.544,174.115,77.935,252.88,28.306l135.668,135.676L512,448.186
		      L376.324,312.508z M296.543,296.542c-51.121,51.139-134.308,51.139-185.439,0c-51.121-51.121-51.112-134.299,0.009-185.43
		      c51.122-51.121,134.309-51.13,185.43-0.008C347.665,162.243,347.665,245.421,296.543,296.542z"/>
		  </svg>

		  <div className={classes.search}>
		  <div className={classes.searchInput}>
        	<CustomSearchInput 
        	  value={searchVal}
        	  onChange={onSearchChange}
        	/>
		  </div>
		</div>
		{contextApp != null ? (
		  <Menu
			keepMounted
			onContextMenu={closeContext}
			open={!!contextApp}
			onClose={closeContext}
			anchorReference="anchorPosition"
			anchorPosition={offset}
			style={{ zIndex: 9999 }}
		  >
			<MenuItem disabled>{apps[contextApp].label}</MenuItem>
			<MenuItem
			  onClick={addToHome}
			  disabled={
				homeApps.filter((app) => app == contextApp).length > 0
			  }
			>
			  Add To Home
			</MenuItem>
			<MenuItem onClick={openApp}>
			  Open {apps[contextApp].label}
			</MenuItem>
			{apps[contextApp].canUninstall ? (
			  <MenuItem onClick={uninstallApp}>
				Uninstall {apps[contextApp].label}
			  </MenuItem>
			) : null}
		  </Menu>
		) : null}
	  </div>
	  </div>
	</Slide>
  );
  
});
