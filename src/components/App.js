import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import Login from './Login';
import EmailForm from './EmailForm';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* Form should be a protected route! */}
        <Route path="/form" component={EmailForm} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
