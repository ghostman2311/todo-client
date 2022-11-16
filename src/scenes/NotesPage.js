import { useState } from "react";
import { NoteList } from "../components/NoteList";
import { useNote } from "../providers/NotesProviders";
import { Modal } from "../components/Modal";
import { NotesForm } from "../components/NotesForm";
import { DeleteForm } from "../components/DeleteForm";

const NotesPage = () => {
  const { notes, createNote, deleteNote } = useNote();
  const [isOpen, setIsOpen] = useState(false);
  const [currentlyDeletingNoteID, setCurrentlyDeletingNoteID] = useState("");

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
      <Modal
        isOpen={!!currentlyDeletingNoteID}
        onRequestClose={() => setCurrentlyDeletingNoteID("")}
      >
        <DeleteForm
          onConfirm={() => {
            deleteNote(currentlyDeletingNoteID);
            setCurrentlyDeletingNoteID("");
          }}
          onDeny={() => setCurrentlyDeletingNoteID("")}
        />
      </Modal>
      <h1>My Notes Page</h1>
      <NoteList
        notes={notes}
        onRequestDelete={(id) => setCurrentlyDeletingNoteID(id)}
      />
      <button className="full-width" onClick={() => setIsOpen(true)}>
        + Add Note
      </button>
    </>
  );
};

export { NotesPage };
