import { useState } from "react";

const NotesForm = ({ onSubmit = () => {} }) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter Title"
      />
      <button onClick={() => onSubmit(title)}>Submit</button>
    </>
  );
};

export { NotesForm };
