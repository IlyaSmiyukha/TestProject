import React from "react";
import { hot } from 'react-hot-loader/root';

import AppHeader from './components/header'
import GuestsList from './components/guestsList'

class App extends React.Component {
  render() {
    return <React.Fragment>
      <AppHeader />
      <h2>Invite Guest</h2>
      <h2>Guests</h2>
      <GuestsList />
    </React.Fragment>;
  }
}

export default hot(App);
