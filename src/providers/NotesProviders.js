import * as React from "react";
import { NotesContext } from "../contexts/NotesContext";

const fakeNotes = [
  {
    id: "1",
    title: "My First note",
    content: "Hey there this is my first note",
  },
];
const NotesProviders = ({ children }) => {
  const [notes, setNotes] = React.useState(fakeNotes);
  return (
    <NotesContext.Provider value={[notes, setNotes]}>
      {children}
    </NotesContext.Provider>
  );
};

const useNote = () => {
  const [notes, setNotes] = React.useContext(NotesContext);
  return [notes, setNotes];
};

export { NotesProviders, useNote };
