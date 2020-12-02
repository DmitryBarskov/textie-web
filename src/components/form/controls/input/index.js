import React from 'react';

import FormContext from '../../FormContext';
import Error from '../error';

// validate: value -> [isValid: boolean, [error messages]]
const ValidatedInput = ({ name, label, validate }) => {
  const { formData, setFormData } = React.useContext(FormContext);

  const onChange = (event) => {
    let value = event.target.value;

    let [isValid, errorMessage] = validate ? validate(value) : [true, ""];

    if (!formData.errors) {
      formData.errors = {};
    }

    if (isValid) {
      delete formData.errors[name];
    } else {
      formData.errors[name] = errorMessage;
    }

    setFormData({ ...formData, [name]: value });
  };

  let id = `input-${name}`;

  return (
    <div className="form-group">
      <label htmlFor={id}>{label || name}</label>
      <input id={id} className="form-control" name={name} value={formData[name] || ""} onChange={onChange} />
      <Error messages={(formData.errors || {})[name]} />
    </div>
  );
};

export default ValidatedInput;
