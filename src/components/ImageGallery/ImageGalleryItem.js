import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { largeImageURL, webformatURL } = this.props;

    return (
      <li className="ImageGalleryItem">
        <img
          onClick={this.toggleModal}
          src={webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.protoType = {
  largeImageURL: PropTypes.string.isRequired,
  webkitURL: PropTypes.string.isRequired,
};
