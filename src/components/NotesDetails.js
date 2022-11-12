import { useState } from "react";
import { useParams } from "react-router-dom";

const NotesDetails = ({ notes }) => {
  const { notesId } = useParams();
  const note = notes.find((note) => note.id === notesId);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    title: note.title || "",
    content: note.content || "",
  });

  const saveHandler = () => {
    console.log({ ...updatedData });
  };
  const cancelHandler = () => {
    setUpdatedData((prev) => ({
      ...prev,
      title: note.title,
      content: note.title,
    }));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <>
        <input
          value={updatedData.title}
          onChange={(e) =>
            setUpdatedData((prev) => ({ ...prev, title: e.target.value }))
          }
          placeholder="Enter Title"
          type="text"
        />
        <textarea
          value={updatedData.content}
          onChange={(e) =>
            setUpdatedData((prev) => ({ ...prev, content: e.target.value }))
          }
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
