import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import "./style.css";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postDataRequest } from "../redux/action/action";

import ReactSpinner from "./ReactSpinner";

const Create = () => {
  const dispatch = useDispatch();
  const state = useSelector((res) => res.reducer);
  const nav = useNavigate();

  const initialValues = {
    name: "",
    date: "",
    age: "",
    gender: "",
    address: "",
    number: "",
    emergencyno: "",
    primaryPhysician: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    date: Yup.date().required("Date of Birth is required"),
    age: Yup.number().required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    address: Yup.string().required("Address is required"),
    number: Yup.string()
      .matches(/^[0-9]+$/, "Must be a number")
      .length(10, "Contact Number must be exactly 10 digits")
      .required("Contact Number is required"),
    emergencyno: Yup.string()
      .matches(/^[0-9]+$/, "Must be a number")
      .length(10, "Emergency Contact must be exactly 10 digits")
      .required("Emergency Contact is required"),
    primaryPhysician: Yup.string().required(
      "Primary Care Physician is required"
    ),
  });
  const handleSubmit = (values) => {
    console.log(values);
    const data = { ...values };

    dispatch(postDataRequest(data));

    nav("/list");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      {state.loading ? (
        <ReactSpinner />
      ) : (
        <div className="card">
          <h1 className="text-center mt-3 ">Patient Registration Form</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
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
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-danger"
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
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-danger"
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
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group text-start mt-2">
                  <div class="form-group text-start mt-2">
                    <label>Gender</label>
                    <div className="row">
                      <div className="col mt-3 ">
                        <label>
                          <Field type="radio" name="gender" value="male" />
                          Male
                        </label>
                      </div>
                      <div className="col mt-3 ">
                        <label>
                          <Field type="radio" name="gender" value="female" />
                          Female
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-danger"
                    />
                  </div>
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
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group text-start mt-2">
                  <label htmlFor="number">Contact Number</label>
                  <Field
                    type="number"
                    className="form-control mt-2"
                    placeholder="Enter Contact Number"
                    id="number"
                    name="number"
                  />
                  <ErrorMessage
                    name="number"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group text-start mt-2">
                  <label htmlFor="emergencyno">Emergency Contact</label>
                  <Field
                    type="number"
                    className="form-control mt-2"
                    placeholder="Enter Emergency Contact"
                    id="emergencyno"
                    name="emergencyno"
                  />
                  <ErrorMessage
                    name="emergencyno"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="form-group text-start mt-2 mb-3">
                  <label htmlFor="primaryPhysician">
                    Primary Care Physician
                  </label>
                  <Field
                    type="text"
                    className="form-control mt-2"
                    placeholder="Enter Primary Care Physician's Name"
                    id="primaryPhysician"
                    name="primaryPhysician"
                  />
                  <ErrorMessage
                    name="primaryPhysician"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <div className="container">
                <button
                  type="submit"
                  className="btn btn-block w-50 mb-3 mt-3 fw-bold"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default Create;
