import './styles/Modal.css';

const Modal = ({ data, isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <>
            <div className="overlay"></div>
            <div className="modal">
                <div className="modal-header">
                    <p className="modal-title">{data.date_due}</p>
                    <button
                        className="modal-close-btn"
                        id="modal-close-btn"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                </div>
                <div class="modal-body">
                    <strong>Title: </strong> {data.subject}
                    <br />

                    <strong>Type:</strong> {data.id}
                    <br />
                    
                    <strong>Description:</strong>
                    <p>{data.date_due}</p>
                    <br />
                </div>
            </div>
        </>
    );
};

export default Modal;
