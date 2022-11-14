import * as React from "react";
import { NotesContext } from "../contexts/NotesContext";
import { v4 as uuid } from "uuid";

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

  const createNote = (title) => {
    setNotes(notes.concat({ id: uuid(), title, content: "" }));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, { title, content }) => {
    setNotes(
      notes.map((note) => {
        return note.id === id ? { id, title, content } : note;
      })
    );
  };
  return { notes, createNote, deleteNote, updateNote };
};

export { NotesProviders, useNote };
