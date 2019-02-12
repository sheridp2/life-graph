import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import EntryField from "./EntryField";
import formFields from "./formFields";

class EntryForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, noValueError, type }) => {
      return (
        <Field
          key={name}
          component={EntryField}
          label={label}
          type={type}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onEntrySubmit)}>
          {this.renderFields()}
          <Link to="/dashboard" className="red btn-flat white-text">
            Cancel
          </Link>
          <button className="green white-text btn-flat right">
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

  _.each(formFields, ({ name, type, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
    if (values.lowScore < 0 || values.lowScore > 100 || isNaN(values.lowScore)) {

      errors.lowScore = 'Enter value between 0 and high score';

    }
    if (values.highScore > 100 || isNaN(values.highScore)) {
      errors.highScore = 'Enter value between low score and 100'
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "entryForm",
  destroyOnUnmount: false
})(EntryForm);
