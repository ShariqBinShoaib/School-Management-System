import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";

class AddParent extends Form {
  state = {
    data: {
      guardianName: "",
      motherName: "",
      nationalId: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      block: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    guardianName: Joi.string()
      .min(3)
      .required()
      .label("Name"),
    motherName: Joi.string()
      .min(3)
      .label("Parent"),
    nationalId: Joi.string()
      .required()
      .label("Gender"),
    phone: Joi.string()
      .required()
      .label("Date of Birth"),
    address: Joi.string()
      .min(3)
      .required()
      .label("Address"),
    country: Joi.string()
      .required()
      .label("Country"),
    city: Joi.string()
      .min(3)
      .required()
      .label("City"),
    state: Joi.string()
      .min(3)
      .required()
      .label("State"),
    username: Joi.string()
      .min(3)
      .required()
      .label("Username"),
    email: Joi.string()
      .email()
      .min(3)
      .label("Username"),
    password: Joi.string()
      .min(3)
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log(this.state.data);
  };

  render() {
    return (
      <div className="adm-form">
        <h1>Add Parent</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            {this.renderInput("guardianName", "Name", "col-md-6")}
            {this.renderInput("motherName", "Mother Name", "col-md-6")}
          </div>
          <div className="form-row">
            {this.renderInput("nationalId", "National ID", "col-md-6")}
            {this.renderInput("phone", "Phone No", "col-md-6")}
          </div>
          {this.renderInput("address", "Address")}
          <div className="form-row">
            {this.renderInput("country", "Country", "col-md-4")}
            {this.renderInput("city", "City", "col-md-4")}
            {this.renderInput("state", "State/Province", "col-md-4")}
          </div>
          <div className="form-row">
            {this.renderInput("username", "Username", "col-md-4")}
            {this.renderInput("email", "Email", "col-md-4")}
            {this.renderInput("password", "Password", "col-md-4")}
          </div>
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default AddParent;
