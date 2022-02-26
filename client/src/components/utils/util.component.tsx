import { Navigate } from "react-router-dom";
import Login from "../login/Login.component";

export function PrivateRoute({ Component, token }: any) {
  return token ? <Component /> : <Navigate to="/login" />;
}

export function PublicRoute({ token, ...otherProps }: any) {
  return token ? <Navigate to="/" /> : <Login {...otherProps} />;
}
