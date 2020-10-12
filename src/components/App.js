import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';

// Components
import ContactUs from './ContactUs';
import CenteredFullScreenWrapper from '../utils/CenteredFullScreenWrapper';

function App() {
  return (
    <CenteredFullScreenWrapper>
      <Container component="main" maxWidth="xs">
        <Switch>
          <Route path="/contact" component={ContactUs} />
          <Redirect to="/contact" />
        </Switch>
      </Container>
    </CenteredFullScreenWrapper>
  );
}

export default App;
