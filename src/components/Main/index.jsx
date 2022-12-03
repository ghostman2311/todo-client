import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotesPage } from "../../scenes/NotesPage";
import { NotesDetails } from "../../scenes/NotesDetails";
import { Navigation } from "../Navigation";
import { Login } from "../../scenes/Login";
import { Register } from "../../scenes/Register";
import { ProtectedRoute } from "../ProtectedRoute";
import { useUser } from "../../hooks/useUser";

const Main = () => {
  const { user, userIsLoading } = useUser();

  let isLoggedIn = !!user;
  return (
    <Router>
      <Navigation />
      <div className="content-container">
        <Switch>
          <ProtectedRoute
            isLoading={userIsLoading}
            canAccess={isLoggedIn}
            redirectTo="/login"
            path="/notes"
            exact
          >
            <NotesPage />
          </ProtectedRoute>
          <ProtectedRoute
            isLoading={userIsLoading}
            canAccess={isLoggedIn}
            redirectTo={"/login"}
            path="/notes/:notesId"
          >
            <NotesDetails />
          </ProtectedRoute>
          <ProtectedRoute
            isLoading={userIsLoading}
            canAccess={!isLoggedIn}
            redirectTo="/notes"
            path="/login"
          >
            <Login />
          </ProtectedRoute>
          <ProtectedRoute
            isLoading={userIsLoading}
            canAccess={!isLoggedIn}
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
