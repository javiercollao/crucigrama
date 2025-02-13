import PropTypes from "prop-types"

export default function References({ refs = [] }) {
  return (
    <>
      <h3 data-i18n="references_title">Horizontal</h3>
      <ol>
        {refs.length > 0 ? (
          refs.map((ref, index) => <li key={index}>{ref}</li>)
        ) : (
          <li>No hay referencias disponibles.</li>
        )}
      </ol>
    </>
  );
}

References.propTypes = {
  refs: PropTypes.array
}