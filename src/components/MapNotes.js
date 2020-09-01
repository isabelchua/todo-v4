import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context';
import Note from './Note';

function MapNotes() {
	const { state } = useContext(GlobalContext);
	return (
		<div>
			{state.notes.map((note, i) => {
				return <Note note={note} key={i} />;
			})}
		</div>
	);
}

export default MapNotes;
