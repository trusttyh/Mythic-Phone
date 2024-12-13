import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Wallpaper from './components/Wallpaper';
import CustomWallpaper from './components/CustomWallpaper';
import Version from './components/Version';

import { Wallpapers } from '../../util/Wallpapers';

const useStyles = makeStyles(theme => ({
    wrapper: {
        height: '100vh', // Full viewport height for iPhone screen
        background: 'linear-gradient(180deg, #000000 0%, #1C1C1E 100%)',
        textAlign: 'center',
        padding: '10px', // Increased padding for better spacing
    },
    wallpaperList: {
        height: 'calc(100% - 60px)', // Leave space for the footer
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: '10px 0',
        '&::-webkit-scrollbar': {
            width: 6,
        },
        '&::-webkit-scrollbar-thumb': {
            background: '#888',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: theme.palette.primary.main,
        },
        '&::-webkit-scrollbar-track': {
            background: 'transparent',
        },
    },
}));

const WallpaperSelector = props => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <Grid container spacing={1} className={classes.wallpaperList}>
                <Grid item xs={4}>
                    <CustomWallpaper />
                </Grid>
                {Object.keys(Wallpapers).map((item, index) => (
                    <Grid key={`wallpaper-${index}`} item xs={4}>
                        <Wallpaper
                            item={item}
                            wallpaper={Wallpapers[item]}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default WallpaperSelector;
