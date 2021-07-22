import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Myself from "./pages/Myself";
import Projects from "./pages/Projects";

import ProtectedRoute from "./ProtectedRoute";

export default function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute path="/check">
          <Redirect exact from="/check" to="/admin" />
          <Admin />
        </ProtectedRoute>
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/myself" component={Myself} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}
