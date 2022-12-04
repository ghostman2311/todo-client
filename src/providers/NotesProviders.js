import * as React from "react";
import { NotesContext } from "../contexts/NotesContext";
import { useUser } from "../hooks/useUser";
import { useAuthedRequest } from "../hooks/useAuthedRequest";

const NotesProviders = ({ children }) => {
  const [notes, setNotes] = React.useState([]);
  const [status, setStatus] = React.useState("idle");
  const { user } = useUser();
  const { get, post, put, del, isReady } = useAuthedRequest();

  React.useEffect(() => {
    const loadNotes = async () => {
      try {
        setStatus("pending");
        const response = await get(`/users/${user.uid}/notes`);
        setNotes(response);
        setStatus("resolved");
      } catch (e) {
        console.log(e);
        setStatus("rejected");
      }
    };
    if (user && isReady) {
      loadNotes();
    }
  }, [user, get, isReady]);
  return (
    <NotesContext.Provider
      value={{ notes, setNotes, status, user, get, post, put, del }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNote = () => {
  const { notes, setNotes, status, user, post, put, del } =
    React.useContext(NotesContext);

  const createNote = async (title) => {
    try {
      const response = await post(`/users/${user.uid}/notes`, { title });
      setNotes(notes.concat(response));
    } catch (e) {
      console.log(e);
    }
  };

  const deleteNote = async (id) => {
    try {
      await del(`/notes/${id}`);
      setNotes(notes.filter((note) => note.id === id));
    } catch (e) {
      console.log(e);
    }
  };

  const updateNote = async (id, { title, content }) => {
    try {
      const updatedNote = await put(`/notes/${id}`, { title, content });
      setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
    } catch (e) {
      console.log(e);
    }
  };
  return { notes, createNote, deleteNote, updateNote, status };
};

export { NotesProviders, useNote };
