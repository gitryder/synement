import './styles/Modal.css';
import { getAbbreviation } from './utils';

const Modal = ({ data, isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <>
            <div className="overlay"></div>
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">
                        {getAbbreviation(data.subject)}
                    </p>
                    <button
                        className="modal-close-btn"
                        id="modal-close-btn"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div class="modal-body">
                    <strong>Type:</strong>
                    <p>{data.type}</p>
                    <br />

                    <strong>Due date:</strong>
                    <p>{data.date_due}</p>
                    <br />

                    <strong>Title: </strong>
                    <p>{data.title}</p>
                    <br />

                    <strong>Description:</strong>
                    <p>{data.desc}</p>
                    <br />
                </div>
            </div>
        </>
    );
};

export default Modal;
