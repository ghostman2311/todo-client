const DeleteForm = ({ onConfirm, onDeny }) => {
  return (
    <>
      <h3>Delete Note</h3>
      <p>Are you sure you want to delete?</p>
      <button onClick={() => onDeny()}>No</button>
      <button onClick={() => onConfirm()}>Yes</button>
    </>
  );
};

export { DeleteForm };
