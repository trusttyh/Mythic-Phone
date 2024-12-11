import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Grid, Avatar, IconButton, Paper, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDismisser, useMyApps } from '../../hooks';
import Nui from '../../util/Nui';
import DOMPurify from 'dompurify';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		padding: 15,
		background: '#1c1c1ef0',
		borderRadius: 15,
		marginBottom: 15,
		boxShadow: '0 2px 10px rgba(0,0,0,0.4)',
		position: 'relative',
		  },
		  appInfo: {
		paddingBottom: 10,
		marginBottom: 10,
		borderBottom: `1px solid #333333`,
		transition: 'filter ease-in 0.15s',
		'&.clickable:hover': {
		  filter: 'brightness(0.9)',
		  cursor: 'pointer',
		},
		  },
		  appIcon: {
		height: 40,
		width: 40,
		color: '#ffffff',
		display: 'inline-block',
		marginRight: 10,
		background: '#007aff',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		'& svg': {
		  height: '50%',
		  width: '50%',
		}
	},
	appName: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '600',
		lineHeight: '40px',
	},
		time: {
		color: '#aaaaaa',
		fontSize: 12,
		position: 'absolute',
		top: 22,
		right: -162,
	},
		notifTitle: {
		fontSize: 16,
		fontWeight: '600',
		color: '#ffffff',
		marginTop: 10,
	},
	notifDescrip: {
		fontSize: 14,
		color: '#cccccc',
		marginTop: 5,
	},
	actionView: {
		color: theme.palette.info.light,
		fontSize: 18,
		height: 32,
		width: 32,
	},
	actionAccept: {
		color: theme.palette.success.main,
		fontSize: 18,
		height: 32,
		width: 32,
	},
	actionCancel: {
		color: theme.palette.error.light,
		fontSize: 18,
		height: 32,
		width: 32,
	},
	actionBtns: {
		position: 'absolute',
		top: 10,
		right: 10,
		display: 'flex',
		alignItems: 'center',
	},
	  actionBtn: {
		color: '#ffffff',
		fontSize: 20,
		marginLeft: 10,
		'&:hover': {
		  color: '#007aff',
		},
	  },
	  iconBackground: {
	
	  },
}));

export default ({ id, notification }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const dismisser = useDismisser();
	const phoneOpen = useSelector((state) => state.phone.visible);
	const apps = useMyApps();
	const location = useLocation();
	const history = useHistory();
	let app =
		typeof notification.app === 'object'
			? notification.app
			: apps[notification.app];

	const [showIcons, setShowIcons] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);

		if (notification.duration != -1) {
			let i = setInterval(() => {
				if (Date.now() > notification.time + notification.duration) {
					setShow(false);
					clearInterval(i);
				}
			}, 1000);

			return () => {
				clearInterval(i);
			};
		}
	}, []);

	useEffect(() => {
		if (notification.collapsed) return;
		if (notification.duration == -1) {
			let t = setTimeout(() => {
				dispatch({
					type: 'NOTIF_COLLAPSE',
					payload: { id: notification._id },
				});
			}, 5000);

			return () => {
				clearTimeout(t);
			};
		}
	}, [notification]);

	const onClick = () => {
		if (notification.duration != -1) {
			setShow(false);
		} else {
			dispatch({
				type: 'NOTIF_COLLAPSE',
				payload: { id: notification._id },
			});
		}
	};

	const onView = () => {
		if (notification.duration != -1) setShow(false);

		if (notification.action?.view === 'USE_SHARE') {
			dispatch({
				type: 'USE_SHARE',
				payload: {},
			});
		} else {
			history.push(`/apps/${app.name}/${notification.action?.view}`);
		}
	};

	const onAccept = () => {
		setShow(false);
		Nui.send('AcceptPopup', {
			event: notification.action?.accept,
			data: notification.data,
		});
	};

	const onCancel = () => {
		setShow(false);
		Nui.send('CancelPopup', {
			event: notification.action?.cancel,
			data: notification.data,
		});
	};

	const onAnimEnd = () => {
		dismisser(notification._id);
	};

	if (!Boolean(app)) return null;
	return (
		<Collapse
			collapsedSize={0}
			in={show}
			onEntered={() => setShowIcons(true)}
			onExiting={() => setShowIcons(false)}
			onExited={onAnimEnd}
		>
			<Paper elevation={20} className={classes.wrapper}>
				<Collapse in={!notification.collapsed} collapsedSize={0}>
					<Grid
						container
						className={`${classes.appInfo} clickable`}
						onClick={onClick}
					>
		  			<Grid item xs={8} style={{ display: 'flex', alignItems: 'center' }}>
						<Avatar variant="rounded" className={classes.appIcon} style={{ background: `${app.color}` }}>
		   				  <FontAwesomeIcon className={classes.appIconfa} icon={app.icon} />
		    			</Avatar>
							<span className={classes.appName}>{app.label}</span>
						</Grid>
						<Grid item xs={6} style={{ position: 'relative' }}>
							<Moment
								className={classes.time}
								date={notification.time}
								fromNow
							/>
						</Grid>
					</Grid>
				</Collapse>
				<Grid container>
					<Grid item xs={12}>
						<span className={classes.notifTitle}>
							<Collapse
								in={
									!notification.collapsed ||
									!phoneOpen ||
									location.pathname == '/'
								}
								collapsedSize={0}
							>
								<span>{notification.title}</span>
							</Collapse>

							{phoneOpen && showIcons && (
								<div className={classes.actionBtns}>
									{Boolean(notification.action?.view) && (
										<IconButton
											onClick={onView}
											className={classes.actionView}
										>
											<FontAwesomeIcon
												icon={['fas', 'eye']}
											/>
										</IconButton>
									)}
									{Boolean(notification.action?.accept) && (
										<IconButton
											onClick={onAccept}
											className={classes.actionAccept}
										>
											<FontAwesomeIcon
												icon={['fas', 'circle-check']}
											/>
										</IconButton>
									)}
									{Boolean(notification.action?.cancel) && (
										<IconButton
											onClick={onCancel}
											className={classes.actionCancel}
										>
											<FontAwesomeIcon
												icon={['fas', 'circle-xmark']}
											/>
										</IconButton>
									)}
								</div>
							)}
						</span>
						<span className={classes.notifDescrip}>
							{DOMPurify.sanitize(notification.description, {ALLOWED_TAGS: []})}
						</span>
					</Grid>
				</Grid>
			</Paper>
		</Collapse>
	);
};