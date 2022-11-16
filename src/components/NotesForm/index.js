import { useState } from "react";

const NotesForm = ({ onSubmit = () => {} }) => {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        className="full-width space-below"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Enter Title"
      />
      <button className="full-width" onClick={() => onSubmit(title)}>
        Submit
      </button>
    </>
  );
};

export { NotesForm };
