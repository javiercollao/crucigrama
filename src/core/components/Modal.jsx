import PropTypes from "prop-types";

export default function Modal({ isOpen, onClose, title, children, tipo = "" }) {
  if (!isOpen) return null;
  return (
    <div className="modal fade show">
        <div className={`modal-dialog modal-dialog-centered ${tipo}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5">{title}</h1>
                    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                </div>
                {children}
            </div>
        </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.node,
  tipo: PropTypes.string
}
