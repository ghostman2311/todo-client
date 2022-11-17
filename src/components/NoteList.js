import { Xbutton } from "./XButton";
const NoteList = ({ notes, onRequestDelete, onClickItem }) => {
  return (
    <>
      {notes.map((note) => {
        return (
          <div
            className="note-list-item"
            key={note.id}
            onClick={() => onClickItem(note.id)}
          >
            <div style={{ flex: 1 }}>
              <h3>{note.title}</h3>
              <p>{note.content.split(" ").length} word(s)</p>
            </div>

            <Xbutton
              onClick={(e) => {
                e.stopPropagation();
                onRequestDelete(note.id);
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export { NoteList };
