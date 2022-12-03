import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotesPage } from "../../scenes/NotesPage";
import { NotesDetails } from "../../scenes/NotesDetails";
import { Navigation } from "../Navigation";
import { Login } from "../../scenes/Login";
import { Register } from "../../scenes/Register";
import { ProtectedRoute } from "../ProtectedRoute";

const Main = () => {
  let canAccess = true;
  return (
    <Router>
      <Navigation />
      <div className="content-container">
        <Switch>
          <ProtectedRoute
            canAccess={canAccess}
            redirectTo="/login"
            path="/notes"
            exact
          >
            <NotesPage />
          </ProtectedRoute>
          <ProtectedRoute
            canAccess={canAccess}
            redirectTo={"/login"}
            path="/notes/:notesId"
          >
            <NotesDetails />
          </ProtectedRoute>
          <ProtectedRoute
            canAccess={!canAccess}
            redirectTo="/notes"
            path="/login"
          >
            <Login />
          </ProtectedRoute>
          <ProtectedRoute
            canAccess={!canAccess}
            redirectTo="/notes"
            path="/register"
          >
            <Register />
          </ProtectedRoute>
          <Route path="*">Not Found Page</Route>
        </Switch>
      </div>
    </Router>
  );
};

export { Main };
