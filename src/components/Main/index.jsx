import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotesPage } from "../../scenes/NotesPage";
import { NotesDetails } from "../../scenes/NotesDetails";
import { Navigation } from "../Navigation";

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
          <Route path="*">Not Found Page</Route>
        </Switch>
      </div>
    </Router>
  );
};

export { Main };
