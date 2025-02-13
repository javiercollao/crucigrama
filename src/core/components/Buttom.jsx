import PropTypes from "prop-types"

export default function Buttom({ children, color, onClick }) {
    return (
      <button type="button" className={`btn btn-${color}`} onClick={onClick}>
        {children}
      </button>
    )
}

Buttom.propTypes = {
    children: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}