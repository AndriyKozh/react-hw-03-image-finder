import PropTypes from 'prop-types';

function ModalImage({ largeImageURL }) {
  return (
    <div>
      <img src={largeImageURL} alt="" />
    </div>
  );
}

export default ModalImage;

Searchbar.propType = {
  largeImageURL: PropTypes.string.isRequired,
};
