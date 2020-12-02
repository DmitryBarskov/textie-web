import React from 'react';

import FormContext from './FormContext';

const Form = ({ children, formData, setFormData }) => {
  const value = { formData, setFormData };

  return (
    <FormContext.Provider value={value}>
      <form className="m-auto w-50 bg-white p-5 rounded-lg">
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
