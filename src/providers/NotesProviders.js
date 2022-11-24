import * as React from "react";
import { NotesContext } from "../contexts/NotesContext";
import { v4 as uuid } from "uuid";
import axios from "axios";

const NotesProviders = ({ children }) => {
  const [notes, setNotes] = React.useState([]);
  const [status, setStatus] = React.useState("idle");

  React.useEffect(() => {
    const loadNotes = async () => {
      try {
        setStatus("pending");
        const response = await axios.get("/notes");
        setNotes(response.data);
        setStatus("resolved");
      } catch (e) {
        setStatus("rejected");
      }
    };

    loadNotes();
  }, []);
  return (
    <NotesContext.Provider value={{ notes, setNotes, status }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNote = () => {
  const { notes, setNotes, status } = React.useContext(NotesContext);

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
  return { notes, createNote, deleteNote, updateNote, status };
};

export { NotesProviders, useNote };
