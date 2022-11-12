import { NoteList } from "../components/NoteList";
import { useNote } from "../providers/NotesProviders";
import { Modal } from "../components/Modal";
import { useState } from "react";

const NotesPage = () => {
  const [notes] = useNote();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        Create Note
      </Modal>
      <h1>My Notes Page</h1>
      <NoteList notes={notes} />
      <button onClick={() => setIsOpen(true)}>+ Add Note</button>
    </>
  );
};

export { NotesPage };
