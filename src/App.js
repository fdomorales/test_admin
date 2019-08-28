import React from 'react';
import Tabs from './Components/Tabs';
import Header from './Components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import Count from './Components/Count';
import ElectoralRoll from './Components/ElectoralRoll';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    	<Header/>
      	<Tabs />
		<Route exact path="/" component={Admin} />
		<Route exact path="/count" component={Count} />
		<Route exact path="/electoral" component={ElectoralRoll} />
    </BrowserRouter>
  );
}

export default App;
