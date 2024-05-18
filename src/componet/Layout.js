import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="container mt-5">
        <div className="row">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
