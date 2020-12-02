import React from 'react';

const Error = ({ messages }) => {
  if (!messages) return null;

  return (
    <small style={{ color: "red" }}>
      {messages.join(", ")}
    </small>
  );
};

export default Error;
