import React from 'react';
import { useContext } from 'react';
import { GlobalProvider } from '../context';

function Note({ note }) {
	// const { dispatch } = useContext(GlobalProvider);

	return (
		<div>
			<h3>{note.title}</h3>
			<p>{note.content}</p>
		</div>
	);
}

export default Note;
