import * as React from "react";
import { NotesContext } from "../contexts/NotesContext";
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

  const createNote = async (title) => {
    try {
      const response = await axios.post("/notes", { title });
      setNotes(notes.concat(response.data));
    } catch (e) {
      console.log(e);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/notes/${id}`);
      setNotes(notes.filter((note) => note.id === id));
    } catch (e) {
      console.log(e);
    }
  };

  const updateNote = async (id, { title, content }) => {
    try {
      const response = await axios.put(`/notes/${id}`, { title, content });
      const updatedNote = response.data;
      setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
    } catch (e) {
      console.log(e);
    }
  };
  return { notes, createNote, deleteNote, updateNote, status };
};

export { NotesProviders, useNote };
