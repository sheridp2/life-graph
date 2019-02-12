import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields'
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'

const EntryReview =({ onCancel, formValues, submitEntry, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return(
    <div>
    <h4>Review todays entry before submitting</h4>
      {reviewFields}
      <button
      className="yellow darken-3 white-text btn-flat"
      onClick={onCancel}
    >
      Back
    </button>
    <button
      onClick={() => submitEntry(formValues, history)}
      className="green white-text btn-flat right"
    >
      Submit Entry
      <i className="material-icons right">email</i>
    </button>
    </div>
  )
}

function mapStateToProps(state) {
  return { formValues: state.form.entryForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(EntryReview));
