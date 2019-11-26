import React from "react";
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { getFormValues } from 'redux-form'

import AppHeader from './components/header'
import GuestsList from './components/guestsList'
import GuestForm from './components/guestForm'

import { simpleAction } from './store/actions';

const initialFormState = {
    name: 'Bob',
    food: 'Pizza',
    isGoing: true,
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (data) => {
    this.props.simpleAction(data);
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <h2>Invite Guest</h2>
        <GuestForm initialValues={initialFormState}
                   handleSubmit={this.handleSubmit}/>
        <h2>Guests</h2>
        <GuestsList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
    formStates: getFormValues('makeGuest')(state),
});

const mapDispatchToProps = dispatch => ({
    simpleAction: (values) => dispatch(simpleAction(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(hot(App))
