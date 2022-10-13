import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images, children }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ largeImageURL, id, webformatURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
      {children}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  children: PropTypes.element,
};
