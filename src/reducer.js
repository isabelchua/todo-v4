import { ACTION } from './context';

export default (state, action) => {
	switch (action.type) {
		case ACTION.ADD_TODO:
			const newNote = {
				id: Math.floor(Math.random() * 100000000),
				title: action.payload.title,
				content: action.payload.content
			};
			console.log(action);

			const addedNotes = [...state.notes, newNote];
			return {
				...state,
				notes: addedNotes
			};
		default:
			return state;
	}
};
