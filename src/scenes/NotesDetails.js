import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNote } from "../providers/NotesProviders";

const NotesDetails = () => {
  const { notes, updateNote } = useNote();
  const { notesId } = useParams();
  const note = notes.find((note) => note.id === notesId);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(note && note.title);
  const [updatedContent, setUpdatedContent] = useState(note && note.content);

  const saveHandler = () => {
    updateNote(notesId, {
      title: updatedTitle,
      content: updatedContent,
    });
    setIsEditing(false);
  };

  const cancelHandler = () => {
    setUpdatedContent(note.content);
    setUpdatedTitle(note.title);

    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <>
        <input
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          placeholder="Enter Title"
          type="text"
        />
        <textarea
          value={updatedContent}
          onChange={(e) => setUpdatedContent(e.target.value)}
          placeholder="Enter Description"
        />
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={saveHandler}>Submit</button>
      </>
    );
  }
  return (
    <>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
};

export { NotesDetails };
