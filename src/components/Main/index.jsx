import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotesPage } from "../../scenes/NotesPage";
import { NotesDetails } from "../NotesDetails";

const notes = [
  {
    id: "1",
    title: "My First note",
    content: "Hey there this is my first note",
  },
];

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/notes" exact>
          <NotesPage notes={notes} />
        </Route>
        <Route path="/notes/:notesId">
          <NotesDetails notes={notes} />
        </Route>
        <Route path="*">Not Found Page</Route>
      </Switch>
    </Router>
  );
};

export { Main };
