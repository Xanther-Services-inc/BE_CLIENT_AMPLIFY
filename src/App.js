import React from "react";
import { Provider } from 'react-redux';
import store from './Redux/store';
import MainNavigation from "./components/MainNavigation";
require('dotenv').config()



function App() {
	return (
		<Provider store={store}>

		
		<>
			<MainNavigation />
		</>

		</Provider>
	);
}

export default App;
