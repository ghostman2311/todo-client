import { useState } from "react";
import { NoteList } from "../components/NoteList";
import { useNote } from "../providers/NotesProviders";
import { Modal } from "../components/Modal";
import { NotesForm } from "../components/NotesForm";

const NotesPage = () => {
  const [notes, createNote] = useNote();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <NotesForm
          onSubmit={(title) => {
            createNote(title);
            setIsOpen(false);
          }}
        />
      </Modal>
      <h1>My Notes Page</h1>
      <NoteList notes={notes} />
      <button onClick={() => setIsOpen(true)}>+ Add Note</button>
    </>
  );
};

export { NotesPage };
