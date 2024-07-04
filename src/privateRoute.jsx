import { Navigate } from "react-router-dom";
import { selectLoggedIn } from "./redux/auth/selectors";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};