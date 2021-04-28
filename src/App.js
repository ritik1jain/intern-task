import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Search from './components/search/Search';
import SearchResults from './components/search-results/SearchResults';

function App() {

  const [data, setData] = useState({
    info: [],
    keyword: '',
    hide: false,
    success: false
  });

  return (
    <Router>
    <div className="tv-layout">
	    <div className="container-fluid">
				<div className="row">
          <div className="span12">
            <Navbar/>
            <Switch>
            <Route path='/' exact render={() => <Search data={data} setData={(e) => setData(e)}/> } />
            <Route path='/search-result' exact render={() => <SearchResults data = {data} setData={(e) => setData(e)} /> } />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
