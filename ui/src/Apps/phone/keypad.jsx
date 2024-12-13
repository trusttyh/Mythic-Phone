import React, { useState } from 'react';
import { IconButton, InputBase, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faTimes, faStar, faClock, faAddressBook, faTh } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles(() => ({
  wrapper: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#000', // Black background
    paddingBottom: '60%',
  },
  numberInputContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
    position: 'relative',
  },
  numberInput: {
    color: '#fff', // White text for the input
    fontSize: '40px',
    textAlign: 'center',
    width: '250px',
  },
  deleteButton: {
    color: '#888',
    fontSize: '24px',
    position: 'absolute',
    right: '16px',
    top: '30px',
  },
  keypadContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    padding: '0 20px',
	marginLeft: '5%',
	marginTop: '10%',
  },
  keypadButton: {
    width: '100px',
    height: '100px',
    borderRadius: '50%', // Circular buttons
    backgroundColor: '#333', // Dark gray buttons
    color: '#fff',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  callButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  callButton: {
    width: '90px',
    height: '90px',
    backgroundColor: '#34C759', // Green call button
    borderRadius: '50%',
    color: '#fff',
    fontSize: '32px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
	marginTop: '5%',
  },
  activeIcon: {
    color: '#4D90FE', // Blue for the active tab
  },
}));

export default function Dialer() {
  const classes = useStyles();
  const [dialNumber, setDialNumber] = useState('');

  const handleDelete = () => {
    setDialNumber(dialNumber.slice(0, -1));
  };

  const handleKeypadClick = (value) => {
    setDialNumber((prev) => (prev.length < 12 ? prev + value : prev));
  };

  const startCall = () => {
    // Call logic goes here
  };

  return (
    <div className={classes.wrapper}>
      {/* Number input */}
      <div className={classes.numberInputContainer}>
        <InputBase
          className={classes.numberInput}
          value={dialNumber}
          placeholder="__________"
          inputProps={{ style: { textAlign: 'center' } }}
        />
        {dialNumber && (
          <IconButton className={classes.deleteButton} onClick={handleDelete}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        )}
      </div>

      {/* Keypad */}
      <div className={classes.keypadContainer}>
        {[['1', ''], ['2', 'ABC'], ['3', 'DEF'],
          ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'],
          ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ'],
          ['*', ''], ['0', '+'], ['#', '']].map(([number, letters]) => (
          <Button
            key={number}
            className={classes.keypadButton}
            onClick={() => handleKeypadClick(number)}
          >
            {number}
            <div style={{ fontSize: '12px', color: '#888' }}>{letters}</div>
          </Button>
        ))}
      </div>

      {/* Call button */}
      <div className={classes.callButtonContainer}>
        <IconButton className={classes.callButton} onClick={startCall}>
          <FontAwesomeIcon icon={faPhone} />
        </IconButton>
      </div>
    </div>
  );
}
