import { JSX } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export const CheckAuth = ({ children }: { children: JSX.Element }) => {
  if (isAuthenticated()) {
    return <Navigate to={"/dashboard/home"} replace />;
  }
  return children;
};
