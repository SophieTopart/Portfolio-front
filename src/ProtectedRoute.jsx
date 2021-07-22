import { Route, Redirect } from "react-router-dom"

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("token") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;