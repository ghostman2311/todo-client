const DeleteForm = ({ onConfirm, onDeny }) => {
  return (
    <>
      <h3>Delete Note</h3>
      <p>Are you sure you want to delete?</p>
      <div className="evenly-spaced">
        <button onClick={() => onDeny()}>No</button>
        <button onClick={() => onConfirm()}>Yes</button>
      </div>
    </>
  );
};

export { DeleteForm };
