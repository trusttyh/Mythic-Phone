import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
  button: {
    marginTop: theme.spacing(1),
  },
  installBtn: {
    backgroundColor: green[500],
    color: 'white',
  },
  uninstallBtn: {
    backgroundColor: red[500],
    color: 'white',
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

const CustomCard = ({ title, image, onInstall, onUninstall, installing, uninstalling }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        {installing || uninstalling ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <div>
            <IconButton className={classes.installBtn} onClick={onInstall}>
              <FontAwesomeIcon icon={['fas', 'download']} />
            </IconButton>
            <IconButton className={classes.uninstallBtn} onClick={onUninstall}>
              <FontAwesomeIcon icon={['fas', 'x']} />
            </IconButton>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
