import Main from './components/Main/Main';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import UserDetail from './components/UserDetail/UserDetail';

function App() {
  return (
    <div >                   
        <Router>
            <Switch>
              <Route path="/userDetail/:userId">
                  <UserDetail></UserDetail>
              </Route>
              <Route exact path="/">
                <Main></Main>
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
