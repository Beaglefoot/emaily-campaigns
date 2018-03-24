import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyReview = ({ onCancel, formValues }) => (
  <div>
    <h5>Confim your entries</h5>

    {formFields.map(({ label, name }) => (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    ))}

    <button className="yellow darken-3 btn-flat" onClick={onCancel}>
      Back
    </button>
  </div>
);

const mapStateToProps = state => ({ formValues: state.form.surveyForm.values });

export default connect(mapStateToProps)(SurveyReview);
