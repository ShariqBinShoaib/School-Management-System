import React from "react";
import Form from "../common/Form";
import Joi from "joi-browser";

class AdmissionForm extends Form {
  state = {
    data: {
      name: "",
      parent: "",
      gender: "",
      dob: "",
      branch: "",
      class: "",
      section: "",
      address: "",
      country: "",
      city: "",
      state: "",
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .min(3)
      .required()
      .label("Name"),
    parent: Joi.string()
      .min(3)
      .required()
      .label("Parent"),
    gender: Joi.string()
      .required()
      .label("Gender"),
    dob: Joi.string()
      .required()
      .label("Date of Birth"),
    branch: Joi.string()
      .required()
      .label("Branch"),
    class: Joi.string()
      .required()
      .label("Class"),
    section: Joi.string()
      .required()
      .label("Section"),
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
    password: Joi.string()
      .min(3)
      .required()
      .label("Password")
  };

  data = {
    gender: [
      {
        id: 1,
        name: "Male"
      },
      {
        id: 2,
        name: "Female"
      }
    ],
    class: [
      {
        id: 1,
        name: "One"
      },
      {
        id: 2,
        name: "Two"
      },
      {
        id: 3,
        name: "Three"
      }
    ],
    section: [
      {
        id: 1,
        name: "A"
      },
      {
        id: 2,
        name: "B"
      },
      {
        id: 3,
        name: "C"
      }
    ],
    branch: [
      {
        id: 1,
        name: "Branch 1"
      },
      {
        id: 2,
        name: "Branch 2"
      }
    ]
  };

  doSubmit = () => {
    console.log(this.state.data);
    this.props.history.push("/students/admit");
  };
  render() {
    return (
      <div className="adm-form">
        <h1>Admission Form</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            {this.renderInput("name", "Name", "col-md-6")}
            {this.renderInput("parent", "Parent", "col-md-6")}
          </div>
          <div className="form-row">
            {this.renderSelect(
              "gender",
              "Gender",
              this.data.gender,
              "col-md-6"
            )}
            {this.renderInput("dob", "Date of Birth", "col-md-6", "date")}
          </div>
          <div className="form-row">
            {this.renderSelect(
              "branch",
              "Branch",
              this.data.branch,
              "col-md-4"
            )}
            {this.renderSelect("class", "Class", this.data.class, "col-md-4")}
            {this.renderSelect(
              "section",
              "Section",
              this.data.section,
              "col-md-4"
            )}
          </div>
          {this.renderInput("address", "Address")}
          <div className="form-row">
            {this.renderInput("country", "Country", "col-md-4")}
            {this.renderInput("city", "City", "col-md-4")}
            {this.renderInput("state", "State/Province", "col-md-4")}
          </div>
          <div className="form-row">
            {this.renderInput("username", "Username", "col-md-6")}
            {this.renderInput("password", "Password", "col-md-6")}
          </div>
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default AdmissionForm;
