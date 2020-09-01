import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
	todo: [
		{ id: 1, name: 'Eat', complete: true },
		{ id: 2, name: 'Eat More', complete: false },
		{ id: 3, name: 'Eat Some More', complete: true }
	]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
