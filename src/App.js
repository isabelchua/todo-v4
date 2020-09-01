import React from 'react';

import './App.css';
import { GlobalProvider } from './context';
import AddNote from './components/AddNote';

function App() {
	return (
		<GlobalProvider>
			<div className="App">hello</div>;
			<AddNote />
		</GlobalProvider>
	);
}

export default App;
