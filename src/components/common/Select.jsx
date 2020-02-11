import React from "react";

const Select = ({ name, label, options, error, classes = "", ...rest }) => (
  <div className={`form-group ${classes}`}>
    <label htmlFor={name}>{label}</label>
    <select
      name={name}
      id={name}
      {...rest}
      className={error ? "form-control is-invalid" : "form-control"}
    >
      <option value="" />
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default Select;
