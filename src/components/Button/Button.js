import PropTypes from 'prop-types';

export const Button = ({ type, label, onLoadMore, className }) => {
  return (
    <button type={type} onClick={onLoadMore} className={className}>
      <span className="button-label">{label}</span>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func,
  label: PropTypes.string.isRequired,
};
