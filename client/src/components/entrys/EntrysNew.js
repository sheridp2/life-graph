import _ from 'lodash'
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import EntryField from './EntryField'
import formFields from './formFields'

class EntryNew extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) =>{
      return <Field key={name} component={EntryField} type="text" label={label} name={name}/>

    })
  }

  render(){
    return(
      <div className="container">
        <form>
        {this.renderFields()}
          <Link to="/dashboard" className="red btn-flat white-text">
            Cancel
          </Link>
        </form>
      </div>
    )
  }
}
export default reduxForm({
  form: "entryForm",
  destroyOnUnmount: false
})(EntryNew);
