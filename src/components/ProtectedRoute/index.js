import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ canAccess, isLoading, redirectTo, ...props }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  } else if (!canAccess) {
    return <Redirect to={redirectTo} />;
  } else {
    return <Route {...props} />;
  }
};

export { ProtectedRoute };
