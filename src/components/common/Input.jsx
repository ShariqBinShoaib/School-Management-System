import React from "react";

const Input = ({ name, label, error, classes = "", ...rest }) => {
  // console.log({ ...rest });
  return (
    <div className={`form-group ${classes}`}>
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className={error ? "form-control is-invalid" : "form-control"}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
