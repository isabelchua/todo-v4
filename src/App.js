import React from 'react';

import './App.css';
import { GlobalProvider } from './context';
import AddNote from './components/AddNote';
import MapNotes from './components/MapNotes';

function App() {
	return (
		<GlobalProvider>
			<div className="App">hello</div>;
			<AddNote />
			<MapNotes />
		</GlobalProvider>
	);
}

export default App;
