import React from 'react';

import FormContext from '../../FormContext';
import Error from '../error';

// validate - a function that takes input value
// and returns array, where first item should be a flag whether
// the input was valid. If it wasn't the array should have error
// messages as the second item.
//
// example:
// validatePresence = (value) => [value.trim().length > 0, ["can't be blank"]];
// label - label of the input, optional
// name - name of the input, required, must be unique
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
