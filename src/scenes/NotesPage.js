import { NoteList } from "../components/NoteList";

const NotesPage = ({ notes }) => {
  return (
    <>
      <h1>My Notes Page</h1>
      <NoteList notes={notes} />
    </>
  );
};

export { NotesPage };
