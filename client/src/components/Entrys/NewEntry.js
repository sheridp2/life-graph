import React, { Component } from 'react';
// import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

class NewEntry extends Component {
  render(){
    return(
      <div>
        <h1>
        Here is entry form
        </h1>
        <Link to="/dashboard" className="red btn-flat white-text">
            Cancel
          </Link>
      </div>
    )
  }
}

export default NewEntry;
