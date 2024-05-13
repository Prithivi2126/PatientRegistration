import { Field, Formik, Form } from "formik";
import React from "react";
import "./style.css";

const Create = () => {
    const initalvalues ={
        name:"",
        date:"",
        age:"",
        gender:"",
        address:"",
        number:"",
        emergencyno:"",
        primaryPhysician:""
    }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card">
        <h1 className="text-center mt-3 ">Patient Registration Form</h1>
        <Formik initialValues={initalvalues}>
          <Form className="row mx-3 my-2">
            <div className="col-lg-6 col-md-6 d-flex flex-column content">
              <div className="form-group text-start mt-3">
                <label htmlFor="name">Patient's Name</label>
                <Field
                  type="text"
                  className="form-control mt-2"
                  placeholder="Enter Patient's Name"
                  id="name"
                  name="name"
                />
              </div>
              <div className="form-group text-start mt-2">
                <label htmlFor="date">Date of Birth</label>
                <Field
                  type="date"
                  className="form-control mt-2"
                  placeholder="Enter Date of Birth"
                  id="date"
                  name="date"
                />
              </div>
              <div className="form-group text-start mt-2">
                <label htmlFor="age">Age</label>
                <Field
                  type="number"
                  className="form-control mt-2"
                  placeholder="Enter Age"
                  id="age"
                  name="age"
                />
              </div>
              <div className="form-group text-start mt-2">
                <label htmlFor="gender">Gender</label>
                <Field
                  type="text"
                  className="form-control mt-2"
                  placeholder="Enter Gender"
                  id="gender"
                  name="gender"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 d-flex flex-column content">
              <div className="form-group text-start mt-3">
                <label htmlFor="address">Address</label>
                <Field
                  type="text"
                  className="form-control mt-2"
                  placeholder="Enter Address"
                  id="address"
                  name="address"
                />
              </div>
              <div className="form-group text-start mt-2">
                <label htmlFor="number">Contact Number</label>
                <Field
                  type="tel"
                  className="form-control mt-2"
                  placeholder="Enter Contact Number"
                  id="number"
                  name="number"
                />
              </div>
              <div className="form-group text-start mt-2">
                <label htmlFor="emergencyno">Emergency Contact</label>
                <Field
                  type="tel"
                  className="form-control mt-2"
                  placeholder="Enter Emergency Contact"
                  id="emergencyno"
                  name="emergencyno"
                />
              </div>
              <div className="form-group text-start mt-2 mb-3">
                <label htmlFor="primaryPhysician">PrimaryCare Physician</label>
                <Field
                  type="text"
                  className="form-control mt-2"
                  placeholder="Enter Primary Care Physician's Name"
                  id="primaryPhysician"
                  name="primaryPhysician"
                />
              </div>
            </div>
          </Form>
        </Formik>

        <div className="container">
          <button type="submit" className="btn btn-block w-50 mb-3 mt-3 fw-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
