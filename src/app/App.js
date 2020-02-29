import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import { BackButton, LoadingGraphic, SearchForm, VideoPlayer, VideoList } from './components';
import { SearchContextProvider } from './context/SearchContext';

function App() {
  return (
    <Router>
      <div className="App">
        <SearchContextProvider>
          <LoadingGraphic />
          <Switch>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </SearchContextProvider>
      </div>
    </Router>
  );
}

function Home() {
  return (
      <div>
        <SearchForm />
        <VideoList />
      </div>
  );
  // return <h2>Home</h2>;
}

function Detail() {
  // return <h2>Detail</h2>;
  return (
    <div>
      <BackButton route='/' />
      <VideoPlayer />
    </div>
  );
}

export default App;
