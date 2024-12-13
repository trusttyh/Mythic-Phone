import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	Menu,
	MenuItem,
	Avatar,
	Badge,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	useAlert,
	useAppView,
	useAppButton,
	useReorder,
	useMyApps,
} from '../../hooks';
import { uninstall } from '../../Apps/store/action';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: '100%',
		userSelect: 'none',
		paddingBottom: '20%'
	},
	gridWrapper: {
		display: 'flex',
		height: '100%',
		transition: 'transform 0.5s ease-in-out',
	},
	grid: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'start',
		alignContent: 'flex-start',
		width: '100%',
		padding: '0 10px',
		overflowX: 'hidden',
		overflowY: 'auto',
	},
	appBtn: {
        width: '25%',
        display: 'inline-block',
        textAlign: 'center',
        height: 'fit-content',
        padding: 10,
        borderRadius: 20,
        position: 'relative',
        '&:hover': {
            transition: 'background ease-in 0.15s',
            background: `${theme.palette.primary.main}40`,
            cursor: 'pointer',
        },
    },
    appContext: {
		width: '25%',
		display: 'inline-block',
		textAlign: 'center',
		height: 'fit-content',
		padding: 10,
		borderRadius: 10,
		position: 'relative',
		transition: 'background ease-in 0.15s',
		background: `${theme.palette.primary.main}40`,
	},
    appIcon: {
		zIndex: 5,
		width: '4rem',
		height: '4rem',
		color: 'white',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '0.6rem',
		margin: 'auto',
		transition: '0.3s ease-in-out',
		cursor: 'pointer',
		fontSize: 35,
		background: 'linear-gradient(135deg, #ff6f00, #d32f2f)', // Background should be always visible
		outline: '1px solid rgba(255, 255, 255, 0.5)', 
		boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.5), inset 0px 1px 2px rgba(0, 0, 0, 0.3)', 
		filter: 'drop-shadow(4px 8px 12px rgba(0, 0, 0, 0.6))',
		position: 'relative',
		overflow: 'hidden',
		'&::before': {
			content: '""',
			position: 'absolute',
			top: '-50%',
			left: '-50%',
			width: '200%',
			height: '200%',
			background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 20%, transparent 80%)',
			opacity: 0, // Ensure the radial gradient is invisible initially
			transition: 'opacity 0.3s ease-in-out',
			zIndex: 1,
		},
		'&:hover': {
			transform: 'scale(1.15)', 
			background: 'linear-gradient(135deg, #d32f2f, #ff6f00)', 
			filter: 'drop-shadow(6px 12px 16px rgba(0, 0, 0, 0.7))', 
			'&::before': {
				opacity: 0.3, 
			},
		}
	  },
	appLabel: {
		fontSize: 16,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		textShadow: '0px 0px 5px #000000',
		fontWeight: 'normal',
		marginTop: 10,
    	pointerEvents: 'none',
	},
	dock: {
		position: 'absolute', 
        bottom: 80,          
		background: 'rgba(0, 0, 0, 0.35)',
		height: '10%',
		width: '90%',
		padding: 10,
		display: 'flex',
		justifyContent: 'space-evenly',
		borderRadius: '35px', 
		marginLeft: '18px', 

	},
	dockBtn: {
        display: 'inline-block',
        textAlign: 'center',
        height: 'fit-content',
        padding: 10,
        borderRadius: 10,
        position: 'relative',
        top: '-10px',

    },
  dockContext: {
    width: '20%',
    display: 'inline-block',
    textAlign: 'center',
    height: 'fit-content',
    padding: 10,
    borderRadius: 10,
    position: 'relative',
    transition: 'background ease-in 0.15s',
    background: `${theme.palette.primary.main}40`,
  },

	pageIndicator: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: 10,
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: '50%',
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		margin: '0 4px',
		transition: 'background-color 0.3s ease',
	},
	activeDot: {
		backgroundColor: 'white',
	},
	menuClose: {
		position: 'fixed',
		top: 0,
		left: 0,
		height: '-webkit-fill-available',
		width: '-webkit-fill-available',
	},
	menu: {
		padding: 5,
		background: theme.palette.secondary.main,
    zIndex: 999,

		fontSize: 18,
		margin: 5,
		width: '40%',
	},
	showAll: {
        color: theme.palette.text.light,
        fontSize: 16,
        position: 'absolute',
        bottom: '22%',
        left: '50%', 
        transform: 'translateX(-50%)', 
        padding: '5px 10px', 
        height: '40px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 5,
        borderRadius: '35px',
        background: 'rgba(0, 0, 0, 0.25)',
        '&:hover': {
          background: theme.palette.primary.main,
          transition: 'background-color ease-in 0.15s',
        },
      },
    icon: {
        fontSize: 16, 
        marginRight: 8, 
    },
      text: {
        fontSize: 16,
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

export default connect(null, {
	uninstall,
})((props) => {
	const openedApp = useAppView();
	const showAlert = useAlert();
	const appButton = useAppButton();
	const reorder = useReorder();
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const apps = useMyApps();
	const homeApps = useSelector((state) => state.data.data.player?.Apps?.home);
	const dockedApps = useSelector(
		(state) => state.data.data.player?.Apps?.dock,
	);
	const notifications = useSelector(
		(state) => state.notifications.notifications,
	);

	const [contextApp, setContextApp] = useState(null);
	const [contextDock, setContextDock] = useState(false);
	const [offset, setOffset] = useState({
		left: 110,
		top: 0,
	});
	const [currentPage, setCurrentPage] = useState(0);
	const appsPerPage = 16;

	useEffect(() => {
		dispatch({ type: 'NOTIF_RESET_APP' });
		console.log('Docked Apps:', dockedApps);

	}, [dockedApps]);

	const totalPages = Math.ceil(homeApps.length / appsPerPage);

	const handleSwipe = (direction) => {
		if (direction === 'left' && currentPage < totalPages - 1) {
			setCurrentPage(currentPage + 1);
		} else if (direction === 'right' && currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

  const openApp = () => {
		openedApp(contextApp);
		history.push(`/apps/${contextApp}`);
	};
  
	const viewList = () => {
		history.push('/apps');
	};

	const startSwipe = (e) => {
		e.preventDefault();
		const startX = e.clientX || e.touches[0].clientX;

		const moveSwipe = (moveEvent) => {
			const endX = moveEvent.clientX || moveEvent.touches[0].clientX;
			if (endX - startX > 50) {
				handleSwipe('right');
				document.removeEventListener('mousemove', moveSwipe);
				document.removeEventListener('touchmove', moveSwipe);
			} else if (startX - endX > 50) {
				handleSwipe('left');
				document.removeEventListener('mousemove', moveSwipe);
				document.removeEventListener('touchmove', moveSwipe);
			}
		};

		document.addEventListener('mousemove', moveSwipe);
		document.addEventListener('touchmove', moveSwipe);

		const endSwipe = () => {
			document.removeEventListener('mousemove', moveSwipe);
			document.removeEventListener('touchmove', moveSwipe);
			document.removeEventListener('mouseup', endSwipe);
			document.removeEventListener('touchend', endSwipe);
		};

		document.addEventListener('mouseup', endSwipe);
		document.addEventListener('touchend', endSwipe);
	};

	const gridWrapperStyle = {
		width: `${100 * totalPages}%`,
		transform: `translateX(-${(100 / totalPages) * currentPage}%)`,
	};

	const appsByPage = [];
	for (let i = 0; i < totalPages; i++) {
		appsByPage.push(
			homeApps.slice(i * appsPerPage, (i + 1) * appsPerPage)
		);
	}


  const onClick = (app) => {
		openedApp(app);
		history.push(`/apps/${app}`);
	};

  const onRightClick = (e, app, isDock = false) => {
		e.preventDefault();
		setOffset({ left: e.clientX - 2, top: e.clientY - 4 });
		if (app != null) setContextApp(app);
		setContextDock(isDock);
	};

  const closeContext = (e) => {
		if (e != null) e.preventDefault();
		setContextDock(null);
		setContextApp(null);
	};

  const addToHome = async () => {
		await appButton('add', 'Home', contextApp);
		showAlert(`${apps[contextApp].label} Added To Home Screen`);
		closeContext();
	};

  const removeFromHome = async () => {
		await appButton('remove', 'Home', contextApp);
		showAlert(`${apps[contextApp].label} Removed Home Screen`);
		closeContext();
	};


  const dockApp = async () => {
		if (dockedApps.length < 4) {
			await appButton('add', 'Dock', contextApp);
			showAlert(`${apps[contextApp].label} Added To Dock`);
		} else showAlert('Can Only Have 4 Apps In Dock');
		closeContext();
	};

  const undockApp = async () => {
		await appButton('remove', 'Dock', contextApp);
		showAlert(`${apps[contextApp].label} Removed From Dock`);
		closeContext();
	};

  const uninstallApp = () => {
		props.uninstall(contextApp);
		closeContext();
	};

  const reorderApp = (index) => {
		let a = Array();
		if (contextDock) {
			a = dockedApps.filter((app) => app !== contextApp);
			a.splice(index, 0, contextApp);
		} else {
			a = homeApps.filter((app) => app !== contextApp);
			a.splice(index, 0, contextApp);
		}

		reorder({ type: contextDock ? 'dock' : 'home', data: a });

		closeContext();
	};

	return (
		<div className={classes.wrapper} onMouseDown={startSwipe} onTouchStart={startSwipe}>
			<div className={classes.gridWrapper} style={gridWrapperStyle}>
				{appsByPage.map((appsToShow, pageIndex) => (
					<div className={classes.grid} key={pageIndex}>
						{appsToShow.map((app, i) => {
							let data = apps[app];
							if (data) {
								return (
									<div
										key={i}
										className={
											contextApp === app && !contextDock
												? classes.appContext
												: classes.appBtn
										}
										title={data.label}
										onClick={() => onClick(app)}
										onContextMenu={(e) =>
											onRightClick(e, app)
										}
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
													<FontAwesomeIcon
														icon={data.icon}
													/>
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
												<FontAwesomeIcon
													icon={data.icon}
												/>
											</Avatar>
										)}
										<div className={classes.appLabel}>
											{data.label}
										</div>
									</div>
								);
							} else {
								return null;
							}
						})}
					</div>
				))}
			</div>
      <div className={classes.dock}>
		{Object.keys(apps).length > 0 && dockedApps.length > 0
		
			? dockedApps.slice(0, 4).map((app, i) => {
				let data = apps[app];
				if (data) {
				return (
					<div
					key={i}
					className={
						contextApp === app && contextDock
						? classes.dockContext
						: classes.dockBtn
					}
					title={data.label}
					onClick={() => onClick(app)}
					onContextMenu={(e) => onRightClick(e, app, true)}
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
							<FontAwesomeIcon icon={data.icon} />
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
					</div>
				);
				} else return null;
			})
			: null}
		</div>


		{contextApp != null ? (
			<Menu
				keepMounted
				onClose={closeContext}
				onContextMenu={closeContext}
				open={!!contextApp}
				anchorReference="anchorPosition"
				anchorPosition={offset}
			>
				<MenuItem disabled>{apps[contextApp].label}</MenuItem>
				{!apps[contextApp].restricted ? (
					dockedApps.length > 0 &&
					dockedApps.filter((app) => app == contextApp).length >
						0 ? (
						<MenuItem onClick={undockApp}>
							Remove From Dock
						</MenuItem>
					) : (
						<MenuItem
							disabled={dockedApps.length >= 4}
							onClick={dockApp}
						>
							Add To Dock
						</MenuItem>
					)
				) : null}
				{homeApps.length > 0 &&
				homeApps.filter((app) => app == contextApp).length > 0 ? (
					<div>
						{/* <MenuItem onClick={removeFromHome}>
							Remove From Home
						</MenuItem>
						<NestedMenuItem
							label="Reorder"
							parentMenuOpen={!!contextApp}
						>
							{contextDock ? (
								<MenuItem
									disabled={dockedApps[0] === contextApp}
									onClick={() => reorderApp(0)}
								>
									Start
								</MenuItem>
							) : (
								<MenuItem
									disabled={homeApps[0] === contextApp}
									onClick={() => reorderApp(0)}
								>
									Start
								</MenuItem>
							)}
							{contextDock ? (
								<MenuItem
									disabled={
										dockedApps[
											dockedApps.length - 1
										] === contextApp
									}
									onClick={() =>
										reorderApp(dockedApps.length - 1)
									}
								>
									End
								</MenuItem>
							) : (
								<MenuItem
									disabled={
										homeApps[homeApps.length - 1] ===
										contextApp
									}
									onClick={() =>
										reorderApp(homeApps.length - 1)
									}
								>
									End
								</MenuItem>
							)}
							<NestedMenuItem
								label="By Index"
								parentMenuOpen={!!contextApp}
							>
								{contextDock
									? dockedApps.map((app, i) => {
											if (contextApp !== app)
												return (
													<MenuItem
														key={i}
														onClick={() =>
															reorderApp(i)
														}
													>
														Index {i + 1}
													</MenuItem>
												);
											else
												return (
													<MenuItem
														key={i}
														disabled
													>
														Index {i + 1}
													</MenuItem>
												);
									  })
									: homeApps.map((app, i) => {
											if (contextApp !== app)
												return (
													<MenuItem
														key={i}
														onClick={() =>
															reorderApp(i)
														}
													>
														Index {i + 1}
													</MenuItem>
												);
											else
												return (
													<MenuItem
														key={i}
														disabled
													>
														Index {i + 1}
													</MenuItem>
												);
									  })}
							</NestedMenuItem>
						</NestedMenuItem> */}
					</div>
				) : (
					<MenuItem onClick={addToHome}>Add To Home</MenuItem>
				)}
				<MenuItem onClick={removeFromHome}>Remove From Home</MenuItem>
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
		<div className={classes.showAll} onClick={viewList}>
          		<FontAwesomeIcon icon="magnifying-glass" className={classes.icon} />
          		<span className={classes.text}>Search</span>
        	</div>
		</div>
	);
});
