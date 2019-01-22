import React, { Component } from 'react';
import { reduxForm, Field } from "redux-form";

import { Link } from 'react-router-dom'
import EntryField from './EntryField'
import formFields from './fromFields';


class NewEntry extends Component {
  render(){
    return(
      <div>

        <Link to="/dashboard" className="red btn-flat white-text">
            Cancel
          </Link>
      </div>
    )
  }
}

export default NewEntry;
