import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

// Components
import Login from './Login';
import EmailForm from './EmailForm';
import CenteredFullScreenWrapper from '../utils/CenteredFullScreenWrapper';

function App() {
  return (
    <CenteredFullScreenWrapper>
      <Container component="main" maxWidth="xs">
        <Switch>
          <Route exact path="/" component={Login} />
          {/* Form should be a protected route! */}
          <Route path="/form" component={EmailForm} />
          <Redirect to="/form" />
        </Switch>
      </Container>
    </CenteredFullScreenWrapper>
  );
}

export default App;
