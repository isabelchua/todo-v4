import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

// const initialState = {
// 	todo: [
// 		{ id: 1, name: 'Eat', complete: true },
// 		{ id: 2, name: 'Eat More', complete: false },
// 		{ id: 3, name: 'Eat Some More', complete: true }
// 	]
// };
export const ACTION = {
	ADD_TODO: 'add-note',
	TOGGLE_TODO: 'toggle-note',
	DELETE_TODO: 'delete-note',
	SET_CURRENT_NOTE: 'current-note',
	EDIT_TODO: 'edit-note'
};

const initialState = {
	currentNote: null,
	notes: [
		{ id: 1, name: 'Eat', complete: true },
		{ id: 2, name: 'Eat More', complete: false },
		{ id: 3, name: 'Eat Some More', complete: true }
	]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	// const [state, dispatch] = useReducer(reducer, initialState);
	const [state, dispatch] = useReducer(reducer, initialState);

	function addTodo(value) {
		dispatch({ type: ACTION.ADD_TODO, payload: value });
	}

	return (
		<GlobalContext.Provider value={{ addTodo, state }}>
			{children}
		</GlobalContext.Provider>
	);
};
