import React, { useState } from 'react';

import { create as signUp } from '../../api/users';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    signUp({ email, fullName, password })
      .then(j => console.log(j.data));
  };

  return (
    <div className="container h-75">
      <div className="row h-100 d-flex align-items-center">
        <div className="m-auto w-40 bg-white p-5 rounded-lg">
          <div className="form-group">
            <label htmlFor="email-input">Email address</label>
            <input type="email" className="form-control" id="email-input" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="full-name-input">Full name</label>
            <input type="text" className="form-control" id="full-name-input" onChange={e => setFullName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password-input">Password</label>
            <input type="password" className="form-control" id="password-input" onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
