import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteDataRequest,
  getDataRequest,
  getapiDataRequest,
} from "../redux/action/action";
import ReactSpinner from "./ReactSpinner";

const List = () => {
  const dispatch = useDispatch();
  const state = useSelector((res) => res.reducer);
  let nav = useNavigate();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const getdata = useCallback(() => {
    dispatch(getDataRequest());
  }, [dispatch]);

  useEffect(() => {
    getdata();
  }, [getdata]);

  const Delete = (id) => {
    setDeleteItemId(id);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirmed = () => {
    dispatch(deleteDataRequest(deleteItemId));
    setShowDeleteConfirmation(false);
  };

  const handleDeleteCancelled = () => {
    setShowDeleteConfirmation(false);
  };

  const edit = (data) => {
    dispatch(getapiDataRequest(data.id));
    nav(`/patient/edit/${data.id}`);
  };

  const Add = () => {
    nav("/patient/create");
  };
  return (
    <div className="container">
      {state.loading ? (
        <ReactSpinner />
      ) : (
        <div className="mt-2 ">
          <div className="d-flex justify-content-between">
          <div>
          <h1 className=" fs-4 text-dark fw-bold mt-5 formhead">
            PATIENT DETAILS
          </h1>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="bg-primary text-white  btn border-0 fw-bold mx-2 border-none rounded"
              onClick={Add}
            >
             +Add
            </button>
          </div>
          </div>
        
          <div className="table-responsive">
            <table className="table table-striped bg-pri  mt-4 border-1">
              <thead className="table-dark">
                <tr>
                  <th scope="col">SI.NO</th>
                  <th scope="col">Name</th>
                  <th scope="col">DateofBirth</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  <th scope="col">ContactNumber</th>
                  <th scope="col">EmergencyContact</th>
                  <th scope="col">PrimaryCarePhysician</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {state.array &&
                  state.array.map((res, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{res.name}</td>
                      <td>{res.date}</td>
                      <td>{res.age}</td>
                      <td>{res.gender}</td>
                      <td>{res.address}</td>
                      <td>{res.number}</td>
                      <td>{res.emergencyno}</td>
                      <td>{res.primaryPhysician}</td>
                      <td>
                        <div className="d-flex">
                          
                          <div>
                            <button
                              type="submit"
                              onClick={() => edit(res)}
                              className=" text-white btnedit border-0 p-1 fw-bold mx-2 border-none rounded"
                            >
                              Edit
                            </button>
                          </div>
                          <div>
                            <button
                              type="submit"
                              onClick={() => Delete(res.id)}
                              className=" text-white  btndel p-1 border-0 fw-bold mx-2 border-none rounded"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {showDeleteConfirmation && (
            <div className="popup">
              <div className="popup-content">
                <h3>Confirm Delete</h3>
                <p>Are you sure you want to delete this item?</p>
                <div className="button-container">
                  <button
                    className="bg-success text-white btn border-0 fw-bold mx-2 border-none rounded"
                    onClick={handleDeleteConfirmed}
                  >
                    Yes
                  </button>
                  <button
                    className="bg-danger text-white  btn border-0 fw-bold mx-2 border-none rounded  "
                    onClick={handleDeleteCancelled}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default List;
