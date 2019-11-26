import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Status from '../status'

import './guestForm.scss'


class GuestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.initialValues
    }
  }

  handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
          [name]: value
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='container'>
        <div className='formGroup'>
          <label htmlFor="name">Name:</label>
          <Field name="name"
                 component="input"
                 type="text"
                 onChange={this.handleInputChange} />
        </div>
        <div className='formGroup'>
          <label htmlFor="isGoing">Is going:</label>
          <Field name="isGoing"
                 component="input"
                 type="checkbox"
                 onChange={this.handleInputChange} />
        </div>
        <div className='formGroup'>
          <label htmlFor="food">Pick your favorite food:</label>
          <Field name="food"
                 component="select"
                 onChange={this.handleInputChange}>
             <option value="Pizza">Pizza</option>
             <option value="Lime">Lime</option>
             <option value="Coconut">Coconut</option>
             <option value="Mango">Mango</option>
           </Field>
        </div>
        <Status />
        <button type="submit">Invite</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'makeGuest'
})(GuestForm)
