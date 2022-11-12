import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotesPage } from "../../scenes/NotesPage";
import { NotesDetails } from "../../scenes/NotesDetails";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/notes" exact>
          <NotesPage />
        </Route>
        <Route path="/notes/:notesId">
          <NotesDetails />
        </Route>
        <Route path="*">Not Found Page</Route>
      </Switch>
    </Router>
  );
};

export { Main };
