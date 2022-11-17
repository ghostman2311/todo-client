import { Xbutton } from "../XButton";
import "./style.css";

const Modal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-background" onClick={onRequestClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top-bar">
          <div className="modal-close-button">
            <Xbutton onClick={onRequestClose} />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export { Modal };
