import { NoteList } from "../components/NoteList";
import { useNote } from "../providers/NotesProviders";

const NotesPage = () => {
  const [notes] = useNote();
  return (
    <>
      <h1>My Notes Page</h1>
      <NoteList notes={notes} />
    </>
  );
};

export { NotesPage };
