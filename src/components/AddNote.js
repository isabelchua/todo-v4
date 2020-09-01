import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context';
import { useState } from 'react';

function AddNote() {
	const { addTodo } = useContext(GlobalContext);
	// const { dispatch } = useContext(GlobalContext);
	const [value, SetValue] = useState({
		title: 'Title',
		content: 'Content'
	});

	const { title, content } = value;

	const handleChange = e => {
		SetValue({ ...value, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		if (value === '') {
			alert('Add note!');
		} else {
			addTodo(value);
			SetValue('');
		}
	};

	return (
		<div className="input-form">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="title"
					onChange={handleChange}
					value={title}
				/>
				<input
					type="text"
					name="content"
					onChange={handleChange}
					value={content}
				/>
				<button>add</button>
			</form>
		</div>
	);
}

export default AddNote;
