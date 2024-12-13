import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Contact from '../contacts/contact';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		height: '100%',
		background: '#000000',  // dark background for the entire app
		color: '#ffffff',       // text color to match the light-on-dark theme
		padding: '20px',
	},
	sectionTitle: {
		color: '#ffffff',
		fontSize: '1.2rem',
		marginTop: '10px',
		marginBottom: '5px',
		fontWeight: 'bold',
	},
	emptyMsg: {
		width: '100%',
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: '25%',
	},
}));

export default (props) => {
	const classes = useStyles();
	const data = useSelector((state) => state.data.data);
	const contacts = data.contacts;
	const [expanded, setExpanded] = useState(-1);

	const handleClick = (index) => (event, newExpanded) => {
		setExpanded(newExpanded ? index : false);
	};

	// Helper function to group contacts by their starting letter
	const groupContactsByLetter = (contacts) => {
		return contacts.reduce((acc, contact) => {
			const firstLetter = contact.name.charAt(0).toUpperCase();
			if (!acc[firstLetter]) {
				acc[firstLetter] = [];
			}
			acc[firstLetter].push(contact);
			return acc;
		}, {});
	};

	// Group contacts alphabetically
	const groupedContacts = groupContactsByLetter(
		contacts.filter((c) => !c.favorite)
	);

	return (
		<div className={classes.wrapper}>
			{contacts.length > 0 ? (
				<>
					{/* Favorite Contacts */}
					{contacts
						.filter((c) => c.favorite)
						.sort((a, b) => a.name.localeCompare(b.name))
						.map((contact) => (
							<Contact
								key={contact._id}
								contact={contact}
								expanded={expanded}
								index={contact._id}
								onClick={handleClick(contact._id)}
								isFavorite={true}
							/>
						))}

					{/* Grouped Contacts by Alphabet */}
					{Object.keys(groupedContacts)
						.sort()
						.map((letter) => (
							<div key={letter}>
								<div className={classes.sectionTitle}>
									{letter}
								</div>
								{groupedContacts[letter].map((contact) => (
									<Contact
										key={contact._id}
										contact={contact}
										expanded={expanded}
										index={contact._id}
										onClick={handleClick(contact._id)}
									/>
								))}
							</div>
						))}
				</>
			) : (
				<div className={classes.emptyMsg}>
					You Have No Recent Contacts
				</div>
			)}
		</div>
	);
};
