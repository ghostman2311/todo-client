import { Link } from "react-router-dom";

const NoteList = ({ notes }) => {
  return (
    <>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content.split(" ").length} word(s)</p>
            <Link to={`/notes/${note.id}`}>
              <button>View</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export { NoteList };
