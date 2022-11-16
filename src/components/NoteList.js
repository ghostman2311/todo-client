import { Link } from "react-router-dom";

const NoteList = ({ notes, onRequestDelete }) => {
  return (
    <>
      {notes.map((note) => {
        return (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content.split(" ").length} word(s)</p>
            <div style={{ paddingBottom: "6px" }} className="evenly-spaced">
              <button onClick={() => onRequestDelete(note.id)}>Delete</button>
              <Link to={`/notes/${note.id}`}>
                <button className="full-width">View</button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { NoteList };
