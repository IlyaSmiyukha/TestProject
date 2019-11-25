import React from 'react';
import { connect } from 'react-redux';

import {guestsListSelector} from '../../store/selectors';

import "./invitedGuests.scss"

class guestsList extends React.Component {
  render() {
    const { guestsList } = this.props;

    return <ul className='guestsList container'>
            {
              guestsList.map(guest => {
                return(
                  <li className={guest.isGoing ? 'going' : ''} key={guest.id}>
                    <p>Name: {guest.name}</p>
                    <p>Will attend: {`${guest.isGoing}`}</p>
                    <p>Favourite food: {guest.favouriteFood}</p>
                  </li>
                )
              })
            }
        </ul>;
  }
}

const mapStateToProps = (state) => {
  return {
    guestsList: guestsListSelector(state)
  }
}

const GuestsList = connect(
  mapStateToProps
)(guestsList)

export default GuestsList
