import React from "react";
import { connect } from 'react-redux';

import { getLodingSelector, getStatusMessageSelector } from '../../store/selectors';

class Status extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const {
        loading,
        message
      } = this.props;

      const status = message ? `Status: ${message}` : ''
      const statusMessage = loading ? 'Loading...' : status;

      return (
        <h3>{statusMessage}</h3>
      )
  }
}

const mapStateToProps = state => ({
    loading: getLodingSelector(state),
    message: getStatusMessageSelector(state),
});


export default connect(
  mapStateToProps,
)(Status)
