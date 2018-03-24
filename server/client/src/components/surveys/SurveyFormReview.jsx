import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => (
  <div>
    <h5>Confim your entries</h5>

    {formFields.map(({ label, name }) => (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    ))}

    <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
      Back
    </button>
    <button
      onClick={() => submitSurvey(formValues, history)}
      className="green btn-flat right white-text"
    >
      Send Survey
      <i className="material-icons right">email</i>
    </button>
  </div>
);

const mapStateToProps = state => ({ formValues: state.form.surveyForm.values });

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
