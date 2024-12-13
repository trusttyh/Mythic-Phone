import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        position: 'absolute',
        bottom: 45,
        left: 0,
        right: 0,
        height: '60px',
        width: '100%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        textAlign: 'center',
        color: '#ffffff',
        lineHeight: '60px',
        fontSize: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'transform 0.3s ease', // Smooth transition
        zIndex: 1000,                // Ensure it appears on top of other elements
    },
    fButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
            transition: 'color ease-in 0.15s',
            color: theme.palette.primary.main,
        },
    },
    phoneHomeBar: {
        backgroundColor: '#ffffff',
        width: '175px',
        height: '4px',
        borderRadius: '2rem',
    },

}));

const Footer = ({ style }) => {
    const classes = useStyles();
    const history = useHistory();


   

    const GoHome = () => {
        history.push('/');
    };

    return (
        <Grid
            container
            className={`${classes.footer}`}
            style={style}
        >
            <Grid item xs={4} className={classes.fButton} onClick={GoHome}>
                <div className={classes.phoneHomeBar}></div>
            </Grid>
        </Grid>
    );
};

export default Footer;
