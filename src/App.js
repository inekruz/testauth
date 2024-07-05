import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Authorization from './Pages/Authorization';
import Main from './Pages/Main';
import AddPost from './Pages/AddPost';

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Authorization setUserAuthenticated={setAuthenticated} />
          </Route>
          <Route path="/main">
            {authenticated ? <Main /> : <Redirect to="/login" />}
          </Route>
          <Route path="/add-post">
            {authenticated ? <AddPost /> : <Redirect to="/login" />}
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
