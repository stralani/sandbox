import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const isLogin = localStorage.getItem("emailKey");
  return isLogin ? <Outlet /> : <Navigate to={"/loginpage"} />;
}

export default Protected;
