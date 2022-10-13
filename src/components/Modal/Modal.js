import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';

import { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = ev => {
    if (ev.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleBekdropDown = ev => {
    if (ev.currentTarget === ev.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className="Overlay" onClick={this.hendleBekdropDown}>
        <div className="Modal">
          <img className="imgModal" src={largeImageURL} alt="large" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  hendleKeyDown: PropTypes.func.isRequired,
};
