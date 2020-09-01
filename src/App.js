import React from 'react';

import './App.css';
import { GlobalProvider } from './context';

function App() {
	return (
		<GlobalProvider>
			<div className="App">hello</div>;
		</GlobalProvider>
	);
}

export default App;
