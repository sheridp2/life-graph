import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import EntryField from "./EntryField";
import formFields from "./formFields";


class EntryForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, noValueError }) => {

      return (
        <Field
          key={name}
          component={EntryField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  handleSubmit(){


  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onEntrySubmit)}>
          {this.renderFields()}
          <Link to="/dashboard" className="red btn-flat white-text">
            Cancel
          </Link>
          <button

        className="green white-text btn-flat right"
      >
        Submit Entry
        <i className="material-icons right">email</i>
      </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "entryForm",
  destroyOnUnmount: false
})(EntryForm);
