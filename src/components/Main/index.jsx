import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotesPage } from "../../scenes/NotesPage";
import { NotesDetails } from "../../scenes/NotesDetails";
import { Navigation } from "../Navigation";
import { Login } from "../../scenes/Login";
import { Register } from "../../scenes/Register";

const Main = () => {
  return (
    <Router>
      <Navigation />
      <div className="content-container">
        <Switch>
          <Route path="/notes" exact>
            <NotesPage />
          </Route>
          <Route path="/notes/:notesId">
            <NotesDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">Not Found Page</Route>
        </Switch>
      </div>
    </Router>
  );
};

export { Main };
