import React, { useState } from 'react';

import { create as signUp } from '../../api/users';

import Form from '../../components/form';
import Input from '../../components/form/controls/input';
import Submit from '../../components/form/controls/submit';

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
    password: ""
  });

  const sendData = (formData) => {
    signUp(formData)
      .then(response => console.log(response))
      .catch(error => {
        setUser({
          ...user, errors: error.response.data.errors
        });
      });
  };

  return (
    <div className="container h-75">
      <div className="row h-100 d-flex align-items-center">
        <Form formData={user} setFormData={setUser} >
          <Input name='email' label='Email' />
          <Input name='fullName' label='Full name' />
          <Input name='password' label='Password' />
          <Submit onSubmit={sendData} />
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
